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
    }
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
const window = ref({})
const ComponentName = props.nameOfWindow
const w = ref(0)
const h = ref(0)
const gridHeight = ref("")
const fileExplorer = ref(null)
const files = ref(windowsStore.photoFolderContent)
const currentIndex = 0
const file = ref(files.value[currentIndex])

onMounted(() => {
    let gridH = fileExplorer.value.clientHeight
    gridHeight.value = gridH + "px"
    console.log(gridHeight.value)
})

const style = computed(() => ({
    height: `${h.value}px`,
    width: `${w.value}px`,
    transform: `translate(${position.value.x}px, ${position.value.y}px)`,
    "--content-padding-left": props.content_padding_left || "15%",
    "--content-padding-right": props.content_padding_right || "15%",
    "--content-padding-top": props.content_padding_top || "5%",
    "--content-padding-bottom": props.content_padding_bottom || "5%",
    "--fullscreen": windowsStore.getFullscreenWindowHeight, // assuming this is a method in your store
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
    <div id="top-bar" class="top-bar-window" :class="
        windowsStore.activeWindow == window.windowId
            ? 'top-bar'
            : 'top-bar-deactivated'
        " @dblclick="toggleWindowSize">
        <div class="window-name">
            <img v-if="file.type == 'photo'" class="icon-image" src="@/assets/win95Icons/photos.png" :alt="window.altText" />
            <img v-else class="icon-image" src="@/assets/win95Icons/file.png" :alt="window.altText" />
            <span>{{ file.title }}</span>
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
    <div class="content">
        <div class="top-bar-nav">
            <div class="top-bar-text">
                <span style="margin-right: 12px"><u>F</u>ile </span>
                <span style="margin-right: 12px"><u>E</u>dit </span>
                <span style="margin-right: 12px"><u>V</u>iew </span>
                <span style="margin-right: 12px"><u>H</u>elp </span>
            </div>
        </div>

        <div v-if="file.type == 'file'" class="file-explorer !h-[95%] !w-[100%]" style="width: 100%;"  ref="fileExplorer" :style="{ height: gridHeight }">
            <!-- <div class="iframe-container"> -->
                <iframe class="mx-auto responsive-iframe w-[100%]" height="100%" :src="file.content.src"  />
            <!-- </div> -->
            <!-- <VuePdfEmbed height="100%" width="100%" :source="file.content.src" /> -->
            <!-- <VuePDF :pdf="file.content.src" /> -->
        </div>

        <div v-else class="file-explorer" ref="fileExplorer">
            <div class="grid-container-photos" :style="{ height: gridHeight }">
                <img :src="file.src" />
            </div>
        </div>

        <!-- <div class="bottom-bar">
            <div class="left-bar bar">{{ files.length }} object(s)</div>
            <div class="right-bar bar">
                {{ convertBytestoMegabytes(size) }}
            </div>
        </div> -->
    </div>
</div>
</template>

<style scoped>
.icon-text {
    display: block;
    overflow: hidden;
    width: 60px !important;
    font-size: 12px;
    font-weight: 300;
    color: black;
    text-overflow: ellipsis;
}

.icon-photos {
    color: black;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    align-items: center;
    text-align: center;
    width: 60px;
    text-overflow: ellipsis;
}

.icon-photos:hover {
    cursor: pointer;
}

.icon-photos:focus .icon-image-photos {
    filter: grayscale(100%) brightness(30%) sepia(100%) hue-rotate(-180deg) saturate(400%) contrast(0.9);
}

.icon-photos:focus .icon-text {
    background: rgb(0, 0, 118);
    color: white;
    margin: 0px;
}

.icon-photos:focus .border-box {
    border: rgb(0, 0, 0) dotted 1px;
}

.icon-image-photos {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
}

.iframe-container {
    
}

.responsive-iframe {
   
}

.grid-container-photos {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 0 !important; */
}

.file-explorer {
    background: gray;
    box-shadow: none;
    border-top: solid rgb(0, 0, 0) 1.5px;
    border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
    height: calc(100% - 30px);
    width: auto;
    z-index: 10;
    margin: 2px;
    /* padding: 2px 2px 2px 2px; */
    overflow-y: hidden;
}

/*-------------------------------------------*\
    Windows/Display
\*-------------------------------------------*/

.minimize {
    display: none;
}

.window {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    user-select: none;
    -ms-touch-action: none;
    touch-action: none;
    flex-flow: column;
    display: flex;
}

.fullscreen {
    width: 100% !important;
    height: var(--fullscreen) !important;
    margin: 0;
    transition: all 0.5s ease;
    padding: 0;
}

.content {
    flex-grow: 1;
    overflow-x: hidden;
    padding-right: var(--content-padding-right);
    padding-left: var(--content-padding-left);
    padding-top: var(--content-padding-top);
    padding-bottom: var(--content-padding-bottom);
}

.bottom-bar {
    height: 22px;
    display: flex;
    width: 100%;
}

.bar {
    height: 100%;
    margin: 2px 2px 2px 2px;
    padding: 0px 2px 1px 0px;
    box-shadow: none;
    border-top: solid rgb(0, 0, 0) 1.5px;
    border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
}

.left-bar {
    width: 100%;
    padding-left: 2px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.right-bar {
    width: 100%;
    padding-left: 2px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

/*-------------------------------------------*\
    Top Bar
\*-------------------------------------------*/

.top-bar {
    background: rgb(0, 0, 124);
}

.top-bar-nav {
    display: flex;
    height: 22px;
    width: 100%;
}

.top-bar-text {
    height: 100%;
    padding-left: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.icon-image {
    width: 15px;
    height: 15px;
    margin-right: 5px;
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

.icon-image {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    margin-top: 0;
    margin-bottom: 0;
}
</style>
