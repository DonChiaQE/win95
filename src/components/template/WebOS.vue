<template>
<interact draggable :dragOption="dragOption" resizable :resizeOption="resizeOption" class="window window-style" :style="style" @dragmove="dragmove" @resizemove="resizemove" @click.native="setActiveWindow" :class="{ fullscreen: $store.getters.getWindowFullscreen(this.ComponentName), minimize: $store.getters.getWindowById(ComponentName).windowState=='minimize'}">
    <div class="top-bar-window" :class="$store.getters.getActiveWindow==this.ComponentName ? 'top-bar' : 'top-bar-deactivated'" id="top-bar" @dblclick="toggleWindowSize">
        <div class="window-name"><img class="icon-image" :src="require('@/assets/win95Icons/' + this.window.iconImage)" :alt="window.altText"/>{{this.window.displayName}}</div>
        <!-- <div class="window-name">{{this.window.displayName}}</div> -->
        <div class="triple-button">
            <button class="minimize-button button" @click="minimizeWindow">
                <span style="height: 2px; width: 6px; background: black; margin-top: 8px; margin-right: 2px;">
                </span>
            </button>
            <button class="expand-button button" @click="toggleWindowSize">
                <span style="height: 8px; width: 9px; border-left: black 1px solid; border-right: black 1px solid; border-left: black 1px solid; border-bottom: black 1px solid; border-top: black 2px solid">
                </span>
            </button>
            <button class="close-button button" style="margin-right: 3px; padding-left: 1px;" @click="closeWindow">×</button>
        </div>
    </div>
    <div class="content">
        <div class="flexbox-column">
            <nav class="download-bar">
                <a href="https://github.com/DonChiaQE/vuejs-os-template" class="download" style="z-index: 10;" download target="_blank">
                    <span style="display: flex;" class="border">
                        <img src="@/assets/download.png" class="icon-image" />
                        <p style="margin-top: 2px;">Build your own WebOS with my template!</p>
                    </span>
                </a>
            </nav>
            <iframe class="frame" id="website" src="https://main-preview-site.netlify.app/" />
        </div>
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
    flex-grow: 1;
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

.flexbox-column {
    display: flex; 
    flex-direction: column; 
    height: 100%;
    overflow: hidden;
}

.download {
    vertical-align: middle;
    box-shadow: 1.5px 1.5px black;
    border-top: solid rgb(250, 250, 250) 1.5px;
    border-left: solid rgb(250, 250, 250) 1.5px;
    border-bottom: solid rgb(90, 90, 90) 1.5px;
    border-right: solid rgb(90, 90, 90) 1.5px;
    background: rgb(192, 192, 192);
    padding: 2px;
    margin-right: 5px;
}

.download:active {
    box-shadow: none;
    background: repeating-conic-gradient(rgb(189, 190, 189) 0% 25%, rgb(255, 255, 255) 0% 50%) 
              50% / 2px 2px;
    border-top: solid rgb(0, 0, 0) 1.5px;
    border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
}

.download-bar {
    border: 1px white solid;
    outline: 1px rgb(123, 125, 123) solid;
    font-size: 12px;
    padding: 4px 4px 4px 4px;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.icon-image {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    margin-top: 0; 
    margin-bottom: 0;
}

.border {
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    font-family: "MS Sans Serif";
    src: url('~@/assets/fonts/MS-Sans-Serif.ttf');
}

.border:active {
    border: black dotted 1px;
}

.download:hover {
    cursor: pointer;
}

iframe {
    width: 100%;
    margin: 0;
    margin-bottom: -5px;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
.frame {
    width: 100%;
    height: 97.5%;
}
</style>

<script>
import interact from "interactjs";
export default {
    props: {
        'windowId': String,
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
            // resizeOption: {
            //     edges: {
            //         top: true,
            //         left: true,
            //         bottom: true,
            //         right: true
            //     },
            //     margin: 8,
            //     modifiers: [
            //         interact.modifiers.restrictRect({
            //             restriction: '#screen'
            //         })
            //     ],
            // },
            dragOption: {
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: "#screen",
                        endOnly: true
                    })
                ],
                allowFrom: '#top-bar',
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
            setTimeout(() => {  
                document.getElementById('website').src = document.getElementById('website').src
            }, 400);
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
