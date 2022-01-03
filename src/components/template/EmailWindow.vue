<template>
<interact draggable :dragOption="dragOption" resizable :resizeOption="resizeOption" class="window window-style" :style="style" @dragmove="dragmove" @resizemove="resizemove" @click.native="setActiveWindow" :class="{ fullscreen: $store.getters.getWindowFullscreen(this.ComponentName), minimize: $store.getters.getWindowById(ComponentName).windowState=='minimize'}">
    <div class="top-bar" id="top-bar" @dblclick="toggleWindowSize">
        <h3 class="window-name">{{this.window.displayName}}</h3>
        <div class="triple-button">
            <button class="expand-button button" @click="toggleWindowSize"></button>
            <button class="minimize-button button" @click="minimizeWindow"></button>
            <button class="close-button button" @click="closeWindow"></button>
        </div>
    </div>
    <div class="content">
        <h2>EMAIL</h2>
        <form class="email-form">
            <input class="email-input" type="text" placeholder="To:">
            <input class="email-input" type="text" placeholder="From:">
            <input class="email-input" type="text" placeholder="Subject:">
            <textarea class="email-input" placeholder="Message"></textarea>
        </form>
    </div>
</interact>
</template>

<style scoped>
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
    min-height: 50vh;
    min-width: 350px;
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

h2 {
    margin: 0;
    padding: 0;
}

.email-input {
    width: 100%;
    margin: 5px 0px 5px 0px;
}
</style>

<script>
import interact from "interactjs";
export default {
    props: {
        'nameOfWindow': String,
        content_padding_left: {
            required: false,
            type: String,
            default: '15%',
        },
        content_padding_right: {
            required: false,
            type: String,
            default: '15%'
        },
        content_padding_top: {
            required: false,
            type: String,
            default: '5%'
        },
        content_padding_bottom: {
            required: false,
            type: String,
            default: '5%'
        },
    },
    data: function () {
        return {
            // ID Name of window (important)
            ComponentName: this.nameOfWindow,

            // window
            Window: {},

            // InteractJS states and modifiers
            resizeOption: {
                edges: {
                    top: true,
                    left: true,
                    bottom: true,
                    right: true
                },
                margin: 8,
                modifiers: [
                    // interact.modifiers.restrictRect({
                    //     restriction: '#screen'
                    // })
                ],
            },
            dragOption: {
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: "#screen",
                        endOnly: true
                    })
                ],
                allowFrom: '.top-bar',
            },
            // values for interact.js transformation
            x: 0,
            y: 0,
            tempX: 0,
            tempY: 0,
            w: 400,
            h: 400,

        }
    },
    computed: {
        style() {
            return {
                height: `${this.h}px`,
                width: `${this.w}px`,
                transform: `translate(${this.x}px, ${this.y}px)`,
                '--content-padding-left': this.content_padding_left || '15%',
                '--content-padding-right': this.content_padding_right || '15%',
                '--content-padding-top': this.content_padding_top || '5%',
                '--content-padding-bottom': this.content_padding_bottom || '5%',
                '--fullscreen': this.$store.getters.getFullscreenWindowHeight
            };
        }
    },
    created() {
        this.window = this.$store.getters.getWindowById(this.ComponentName)
    },
    methods: {
        // functions to interact with window state

        closeWindow() {
            const payload = {
                'windowState': 'close',
                'windowID': this.ComponentName
            }
            this.$store.commit('setWindowState', payload)
        },

        openWindow() {
            const payload = {
                'windowState': 'open',
                'windowID': this.ComponentName
            }
            this.$store.commit('setWindowState', payload)
        },

        minimizeWindow() {
            const payload = {
                'windowState': 'minimize',
                'windowID': this.ComponentName
            }
            this.$store.commit('setWindowState', payload)
        },

        toggleWindowSize() {
            if (this.$store.getters.getWindowFullscreen(this.ComponentName) == true) {
                const payload = {
                    'fullscreen': false,
                    'windowID': this.ComponentName
                }
                this.$store.commit('setFullscreen', payload)
                this.x = this.tempX
                this.y = this.tempY

            } else if (this.$store.getters.getWindowFullscreen(this.ComponentName) == false) {
                const payload = {
                    'fullscreen': true,
                    'windowID': this.ComponentName
                }
                this.$store.commit('setFullscreen', payload)
                const tempX = this.x
                const tempY = this.y
                this.tempX = tempX
                this.tempY = tempY
                this.x = 0
                this.y = 0
            }
        },

        setActiveWindow() {
            this.$store.commit('zIndexIncrement', this.ComponentName)
            this.$store.commit('setActiveWindow', this.ComponentName)
        },

        // drag events

        dragmove(event) {
            this.x += event.dx;
            this.y += event.dy;
            this.setActiveWindow()
        },

        resizemove(event) {
            this.w = event.rect.width;
            this.h = event.rect.height;

            this.x += event.deltaRect.left;
            this.y += event.deltaRect.top;
        }
    }
}
</script>
