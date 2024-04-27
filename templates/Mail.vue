<script setup>
import interact from 'interactjs';
import {
    onMounted,
    ref,
    defineProps,
    computed
} from 'vue';
import {
    useWindowsStore
} from '@/stores/windows'
import {
    useMailStore
} from '@/stores/mail'

const props = defineProps({
    windowId: String,
    nameOfWindow: String,
    content_padding_left: {
        required: false,
        type: String,
        default: "15%",
    },
    content_padding_right: {
        required: false,
        type: String,
        default: "15%",
    },
    content_padding_top: {
        required: false,
        type: String,
        default: "5%",
    },
    content_padding_bottom: {
        required: false,
        type: String,
        default: "5%",
    },
})

const position = ref({
    x: 0,
    y: 0
})
const tempPosition = ref({
    x: 0,
    y: 0
})
const windowsStore = useWindowsStore()
const mailStore = useMailStore()
const window = ref({})
const ComponentName = props.nameOfWindow
const w = ref(400)
const h = ref(400)

const style = computed(() => ({
    height: `${h.value}px`,
    width: `${w.value}px`,
    transform: `translate(${position.value.x}px, ${position.value.y}px)`,
    "--content-padding-left": props.content_padding_left || "15%",
    "--content-padding-right": props.content_padding_right || "15%",
    "--content-padding-top": props.content_padding_top || "5%",
    "--content-padding-bottom": props.content_padding_bottom || "5%",
    "--fullscreen": windowsStore.getFullscreenWindowHeight, 
}));

const setActiveWindow = () => {
    windowsStore.setActiveWindow(window.value.windowId)
    windowsStore.zIndexIncrement(window.value.windowId)
}

const toggleWindowSize = () => {
    if (windowsStore.getWindowFullscreen(window.value.windowId) == true) {
        const payload = {
            fullscreen: false,
            windowId: window.value.windowId,
        };
        windowsStore.setFullscreen(payload)
        position.value.x = tempPosition.value.x
        position.value.y = tempPosition.value.y
    } else if (
        windowsStore.getWindowFullscreen(window.value.windowId) == false
    ) {
        const payload = {
            fullscreen: true,
            windowId: window.value.windowId,
        };
        windowsStore.setFullscreen(payload)
        const tempX = position.value.x
        const tempY = position.value.y
        tempPosition.value.x = tempX
        tempPosition.value.y = tempY
        position.value.x = 0
        position.value.y = 0
    }
}

const minimizeWindow = () => {
    const payload = {
        windowState: "minimize",
        windowId: window.value.windowId,
    };
    windowsStore.setWindowState(payload)
}

const closeWindow = () => {
    const payload = {
        windowState: "close",
        windowId: window.value.windowId,
    };
    windowsStore.setWindowState(payload)
}

const getImagePath = (iconImage) => {
    const path = `../assets/win95Icons/${iconImage}`;
    const modules =
        import.meta.glob("../assets/win95Icons/*", {
            eager: true
        });
    const mod = modules[path]
    if (mod == undefined) {
        return ""
    } else {
        return mod.default;
    }
};

const checkMail = () => {
    if (mailStore.mailSubject == "New Message") {
        return ""
    } else {
        return mailStore.mailSubject
    }
}

const sendEmail = () => {
    setTimeout(() => {
        closeWindow()
        mailStore.setMailSubject("")
        mailStore.setMailSender("")
        mailStore.setMailContent("")
        alert("Email Sent!")
    }, 500)
}

const onChangeMailSubject = (e) => {
    if (e.target.value.replace(/\s/g, '') == "") {
        mailStore.setMailSubject("New Message")
    } else {
        mailStore.setMailSubject(e.target.value)
    }
}

const onChangeMailSender = (e) => {
    if (e.target.value.replace(/\s/g, '') == "") {
        mailStore.setMailSender("")
    } else {
        mailStore.setMailSender(e.target.value)
    }
}

const onChangeMailContent = (e) => {
    if (e.target.value.replace(/\s/g, '') == "") {
        mailStore.setMailContent("")
    } else {
        mailStore.setMailContent(e.target.value)
    }
}

let isDragging = false;

onMounted(() => {
    window.value = windowsStore.getWindowById(ComponentName)
    const draggableWindow = interact("#" + window.value.windowId)
    draggableWindow
        .draggable({
            listeners: {
                move(event) {
                    position.value.x += event.dx
                    position.value.y += event.dy
                    // event.target.style.transform = `translate(${position.value.x}px, ${position.value.y}px)`
                }
            },
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: '#screen',
                    endOnly: true
                }),
            ],
            allowFrom: '#top-bar'
        })
        .on('dragstart', () => {
            isDragging = true;
        })
        .on('dragmove', () => {
            if (isDragging) {
                setActiveWindow();
                // windowsStore.zIndexIncrement(window.value.windowId);
                isDragging = false;
            }
        })
        .on('dragend', () => {
            isDragging = false;
        })
        .resizable({
            edges: {
                left: true,
                right: true,
                bottom: true,
                top: false
            },
            listeners: {
                move(event) {
                    const target = event.target
                    w.value = event.rect.width
                    h.value = event.rect.height
                    target.style.width = `${w.value}px`
                    target.style.height = `${h.value}px`
                    position.value.x += event.deltaRect.left
                    position.value.y += event.deltaRect.top
                }
            },
            modifiers: [
                interact.modifiers.restrictSize({
                    min: {
                        width: 400,
                        height: 400
                    },
                    max: {
                        width: document.getElementById('screen').clientWidth - position.value.x,
                        height: document.getElementById('screen').clientHeight - position.value.y
                    }
                }),
            ],
        })
})
</script>

<template>
<div :id="window.windowId" :style="style" class="window window-style" :class="{
            'fullscreen': window.fullscreen == true,
            'minimize': window.fullscreen == 'minimize',
        }" @click="setActiveWindow" @dragstart="setActiveWindow" @click.native="setActiveWindow">
    <iframe name="hidden_iframe" id="hidden_iframe" style="display: none"></iframe>
    <form @submit="sendEmail" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdRBqHB0Z6GOjwE3jniX8-fHfJK-WcyzNTmkPFg4fg2SYPwpA/formResponse" class="window-style" id="container" target="hidden_iframe">
        <div id="top-bar" class="top-bar-window" :class="
            windowsStore.activeWindow == window.windowId
                ? 'top-bar'
                : 'top-bar-deactivated'
            " @dblclick="toggleWindowSize">
            <div class="window-name">
                <img class="icon-image" :src="getImagePath(window.iconImage)" :alt="window.altText" />{{ window.displayName }}
            </div>
            <div class="triple-button">
                <button class="minimize-button button" @click="minimizeWindow">
                    <span style="
                    height: 2px;
                    width: 6px;
                    background: black;
                    margin-top: 8px;
                    margin-right: 2px;
                ">
                    </span>
                </button>
                <button class="expand-button button" @click="toggleWindowSize">
                    <span style="
                    height: 8px;
                    width: 9px;
                    border-left: black 1px solid;
                    border-right: black 1px solid;
                    border-left: black 1px solid;
                    border-bottom: black 1px solid;
                    border-top: black 2px solid;
                ">
                    </span>
                </button>
                <button class="close-button button" style="margin-right: 3px; padding-left: 1px" @click="closeWindow">
                    ×
                </button>
            </div>
        </div>

        <div class="send-bar">
            <button type="submit" class="sent" style="z-index: 10">
                <span class="border-box">
                    <img src="@/assets/Mail/send.png" class="icon-image" />
                    <p style="margin-top: 2px; color: black">Send</p>
                </span>
            </button>
        </div>

        <div class="content">
            <div class="container-details">
                <div class="header">{{ mailStore.mailSubject }}</div>
                <hr />
                <div class="subject-container">
                    <p style="margin: 8px">To:</p>
                    <div class="receipient">Don</div>
                </div>
                <hr />
                <div class="subject-container">
                    <p style="margin: 8px">Subject:</p>
                    <input name="entry.609946071" class="subject" v-model="mailSubject" v-on:input="onChangeMailSubject" type="text" required="true" />
                </div>
                <hr />
                <div class="from-container" style="margin-bottom: 2px">
                    <p style="margin: 8px">From:</p>
                    <input name="entry.367924729" class="subject" v-model="mailSender" v-on:input="onChangeMailSender" type="email" required="true" />
                </div>
            </div>

            <textarea name="entry.863594021" v-model="mailContent" v-on:input="onChangeMailContent" required="true"></textarea>
        </div>
    </form>
</div>
</template>

<style scoped>
/*-------------------------------------------*\
    Windows/Display
\*-------------------------------------------*/

.minimize {
    display: none;
}

.window-style {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    user-select: none;
    -ms-touch-action: none;
    touch-action: none;
    flex-flow: column;
    display: flex;
    max-width: 100vw !important;
}

.fullscreen {
    width: 100% !important;
    height: var(--fullscreen) !important;
    margin: 0;
    transition: all 0.5s ease;
    padding: 0;
}

.content {
    flex-direction: column;
    flex-grow: 1;
    height: var(--fullscreen) !important;
    overflow: hidden;
    display: flex;
    overflow-x: hidden;
    padding-right: var(--content-padding-right);
    padding-left: var(--content-padding-left);
    padding-top: var(--content-padding-top);
    padding-bottom: var(--content-padding-bottom);
}

/*-------------------------------------------*\
    Top Bar
\*-------------------------------------------*/

.top-bar {
    background: rgb(0, 0, 124);
}

.icon-image {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    margin-top: 0;
    margin-bottom: 0;
}

.top-bar-window {
    display: flex;
    width: auto;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    z-index: 10;
    margin: 2px;
    padding: 2px 2px 2px 2px;
}

.top-bar-deactivated {
    background: rgb(123, 125, 123);
}

.top-bar:hover {
    cursor: default;
}

.window-name {
    color: white;
    display: flex;
    align-items: center;
    font-weight: 500;
    padding: 0;
    font-size: 16px;
    margin: 0 0 0 3px;
}

.subject {
    width: 100%;
    background: none;
    border: none;
}

p {
    color: rgb(155, 155, 155);
    margin-right: 5px;
    font-size: 14px;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
}

button {
    outline: none;
}

hr {
    background-color: rgb(155, 155, 155, 0.2);
    width: 100%;
}

.sent {
    vertical-align: middle;
    box-shadow: 1.5px 1.5px black;
    border-top: solid rgb(250, 250, 250) 1.5px;
    border-left: solid rgb(250, 250, 250) 1.5px;
    border-bottom: solid rgb(90, 90, 90) 1.5px;
    border-right: solid rgb(90, 90, 90) 1.5px;
    background: rgb(192, 192, 192);
    padding: 1px;
}

.sent:active {
    box-shadow: none;
    background: repeating-conic-gradient(rgb(189, 190, 189) 0% 25%,
            rgb(255, 255, 255) 0% 50%) 50% / 2px 2px;
    border-top: solid rgb(0, 0, 0) 1.5px;
    /* border-left: solid rgb(0, 0, 0) 1.5px; */
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
}

.border-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
}

.border:active {
    border: black dotted 1px;
}

.sent:hover {
    cursor: pointer;
}

.container-details {
    border: 1px white solid;
    background: white;
    width: 100%;
    padding: 0px;
    margin: 0px;
}

.header {
    font-weight: 700;
    font-size: 24px;
    padding-top: 10px;
    margin-left: 8px;
    text-overflow: ellipsis;
    overflow: auto;
    max-width: auto;
}

.send-bar {
    border: 1px white solid;
    outline: 1px rgb(123, 125, 123) solid;
    font-size: 12px;
    padding: 4px;
    margin: 2px;
}

.receipient {
    background: rgb(194, 214, 252);
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 3px;
    font-size: 14px;
}

.subject-container {
    display: flex;
    height: 35px !important;
    align-items: center;
}

.from-container {
    display: flex;
    height: 35px !important;
    align-items: center;
}

input {
    outline: none;
}

textarea {
    margin: 0;
    background: none;
    border-top: solid rgb(0, 0, 0) 1.5px;
    border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
    caret-color: black;
    color: black;
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    font-size: 14px;
    border-radius: 0;
    flex-grow: 1;
    width: 100% !important;
}
</style>
