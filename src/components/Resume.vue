/* eslint-disable */
<template>
    <interact draggable :dragOption="dragOption" class="resize-drag" :style="style" @dragmove="dragmove" @resizemove="resizemove" :class="{ fullscreen: $store.getters.isFullscreenResume}">
        <div class="window" id="container" :class="{ fullscreen: $store.getters.isFullscreenResume, close: !$store.getters.isShownResume}">
            <div class="top-bar" id="top-bar" v-on:dblclick="$store.commit('toggleFullscreenResume')" :class="$store.getters.activeWindow=='Resume' ? 'top-bar' : 'top-bar-deactivated'">
                <div style="color: white; margin-left: 3px; display: flex; align-items: center;"><img class="icon-image" src="../assets/iPhone-Icons/resume.png"/>Résumé</div>
                <div class="triple-button">
                    <div class="button-hide" v-on:click="minimizeResume"><span style="height: 2px; width: 6px; background: black; margin-top: 8px; margin-right: 2px;"></span></div>
                    <div class="button-expand" v-on:click="$store.commit('toggleFullscreenResume')"><span style="height: 8px; width: 9px; border-left: black 1px solid; border-right: black 1px solid; border-left: black 1px solid; border-bottom: black 1px solid; border-top: black 2px solid"></span></div>
                    <div style="margin-right: 3px; padding-left: 1px;" class="button-close" v-on:click="closeResume">×</div>
                </div>
            </div>



            <div class="content" >
                <div class="download-bar">
                 
                    <a href="/files/don_chia_resume.pdf" class="download" style="z-index: 10;" download target="_blank">
                        <span style="display: flex;" class="border">
                            <img src="../assets/download.png" class="icon-image"/>
                            <div style="margin-top: 2px;">Download</div>
                        </span>
                    </a>

                    <a href="/files/don_chia_resume.pdf" class="download" style="z-index: 10;" target="_blank">
                        <span style="display: flex;" class="border">
                            <img src="../assets/open.png" class="icon-image"/>
                            <div style="margin-top: 2px;">Open In New Tab</div>
                        </span>
                    </a>
                    
                </div>
                <div class="frame" @click.native="focusResume" style="z-index: 99">
                    <!-- <object data="/files/don_chia_resume.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf">
                        <embed src="/files/don_chia_resume.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" />
                    </object> -->
                    <iframe @click.native="focusResume" class="frame" src="https://drive.google.com/file/d/1qsqh9YVvDUeywBdOt1QA7G1ZrE6pE9oG/preview"></iframe>
                    <div v-if="$store.getters.activeWindow!='Resume'" @click.native="focusResume" style="bottom:0;left:0;width:100%;height:95%;position:absolute;" class="overlay"></div>
                </div>
            </div>
        </div>
    </interact>
</template>

<style scoped>
.resize-drag {
    box-sizing: border-box;
    background: none;
    user-select: auto;
    -ms-touch-action: auto;
    touch-action: auto;
    min-height: 40px;
    min-width: 350px;
    position: sticky;
    cursor: auto !important;
}

.window {
    min-height: 500px;
    min-width: 350px;
    height: 500px;
    width: 600px;
    background: rgb(195, 195, 195);
    overflow: hidden;
    border-top: solid rgb(250, 250, 250) 2px;
    border-left: solid rgb(250, 250, 250) 2px;
    border-right: solid rgb(90, 90, 90) 1.5px;
    border-bottom: solid rgb(90, 90, 90) 1.5px;
    box-shadow: 1.5px 1.5px black;
    max-height: 100%;
    max-width: 100%;
    align-items: flex-end;
    outline: rgb(222, 222, 222) 1px solid;
}

a {
    outline: none;
    color: black;
    text-decoration: none;
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

.self {
    width: 100%;
    height: auto;
    /* border-radius: 5px; */
}

@media only screen and (max-width: 600px) {
    .window {
        min-width: 50vw;
        width: 90vw;
        max-width: 100vw;
    }
    .scroll-container {
        padding-left: 10vw !important;
        padding-right: 10vw !important;
    }
    .expandedScrollContainer {
        padding-left: 10vw !important;
        padding-right: 10vw !important;
    }
}

.frame {
    width: 100%;
}

.button-expand, .button-close, .button-hide {
    background: rgb(195, 195, 195);
    border-top: solid rgb(250, 250, 250) 1px;
    border-left: solid rgb(250, 250, 250) 1px;
    border-right: solid rgb(90, 90, 90) 1px;
    border-bottom: solid rgb(90, 90, 90) 1px;
    box-shadow: 1px 1px black;
    height: 16px;
    width: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    margin-left: 2px;
}

.button-close:hover, .button-expand:hover, .button-hide:hover {
    cursor: pointer;
}

.button-close:active, .button-expand:active, .button-hide:active {
    border-radius: 0px;
background: rgb(192, 192, 192);
            box-shadow: none;
    border-top: solid rgb(0, 0, 0) 1.5px;
    border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
}

.badge-grid {
    display: table;
    align-items: center;
    margin-top: 20px;
}

.badge {
    width: auto;
    height: 20px;
    border-radius: 0px;
    font-size: 12px;
    padding-right: 10px;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 6px 20px 0 rgba(0, 0, 0, 0.1); */
}

.subtitle {
    font-size: 12px;
    color: gray;
}

.heading {
    padding-bottom: 5px;
}

.inner-content {
    padding-top: 30px;
}

.inner-content:last-child {
    padding-bottom: 80px;
}

.fullscreen {
    width: 100% !important;
    height: var(--fullscreen) !important;
    margin: 0;
    transition: all 0.5s ease;
    padding: 0;
}

.nossaflex-app {
    max-width: 64px;
    max-height: 64px;
    border-radius: 22%;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    background-image: url('../assets/Icons/NossaflexLight.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: rgb(0,0,0,0, 0.5) 1px solid;
}

.close {
    display: none;
}

.show {
    display: block;
}

.top-bar {
    display: flex;
    height: 25px;
    width: auto;
    background: rgb(0, 0, 124);
    z-index: 10;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 2px;
}

.top-bar-deactivated {
    background: rgb(123, 125, 123);
}

.triple-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.button-red {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #ed6a06;
    display: flex;
    justify-content: center;
    align-items: center
}

.button-yellow {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #f5bf50;
}

.button-green {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #62c454;
}

.button-red:hover {
    cursor: pointer;
}

.button-yellow:hover {
    cursor: pointer;
}

.button-green:hover {
    cursor: pointer;
}

.textarea-content {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
    caret-color: black;
    color: black;
}

.bar {
    background: rgb(0, 0, 124);
    height: 1px;
    width: 100%;
}

.circle {
    background: #f1f0f2;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
}

.header {
    font-weight: 700;
    font-size: 28px;
    padding-top: 10px;
}

.scroll-container {
    overflow: scroll;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
}

.expandedScrollContainer {
    padding-left: 25vw;
    padding-right: 25vw;
}

.paragraph {
    font-weight: 100;
    font-size: 14px;
    padding-bottom: 10px;
}

.paragraph:last-child {
    padding-bottom: 0px;
}

.resizer-r {
    cursor: col-resize;
    height: 100%;
    right: 0;
    top: 0;
    width: 5px;
}

.resizer-b {
    bottom: 0;
    cursor: row-resize;
    height: 5px;
    left: 0;
    width: 100%;
}

.resizer-t {
    top: 0;
    cursor: row-resize;
    height: 5px;
    left: 0;
    width: 100%;
}

.resizer-l {
    cursor: col-resize;
    height: 100%;
    left: 0;
    bottom: 0;
    width: 5px;
}

.resizer {
    position: absolute;
}

embed::-webkit-scrollbar {
  width: 15px;
  background: repeating-conic-gradient(rgb(189, 190, 189) 0% 25%, rgb(255, 255, 255) 0% 50%) 
              50% / 2px 2px;
}

embed::-webkit-scrollbar-thumb {
  background: rgb(189, 190, 189);
  /* box-shadow: 1.5px 1.5px black; */
    border-top: solid rgb(250, 250, 250) 1.5px;
    border-left: solid rgb(250, 250, 250) 1.5px;
    border-bottom: solid rgb(90, 90, 90) 1.5px;
    border-right: solid rgb(90, 90, 90) 1.5px;
    outline: rgb(219,219,219);
}
</style>

<script>
import interact from "interactjs";
export default {
    props: {
        // shownProp: Boolean,
    },
    data: function() {
        return {
            resizeOption: {
                edges: { top: true, left: true, bottom: true, right: true },

            },
            positions: {
                clientX: undefined,
                clientY: undefined,
                movementX: 0,
                movementY: 0
            },
            dragOption: {
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: "parent",
                        endOnly: true
                    })
                ],
                allowFrom: '.top-bar',
            },

            // values for interact.js transformation
            x: 0,
            y: 0,

            mobileAlert: false

        }
    },
    computed: {
        style() {
            return {
                height: `${this.h}px`,
                width: `${this.w}px`,
                transform: `translate(${this.x}px, ${this.y}px)`,
                '--fullscreen': window.innerHeight - 40 + "px"
            };
        }
    },
    methods: {
        showPhotos(e) {
            e.stopPropagation()
            this.$store.commit('changeActiveWindow', 'Photos')
            this.$store.commit('toggleShownPhotos', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'photos')
            }, 1);
        },
        showColorization(e) {
          e.stopPropagation()
          this.$store.commit('changeActiveWindow', 'Colorization')
          this.$store.commit('toggleShownColorization', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'colorization')
            }, 1);
        },
        showNossaflex(e) {
            e.stopPropagation()
            this.$store.commit('changeActiveWindow', 'NOSSAFLEX')
            this.$store.commit('toggleShownNossaflex', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'noss')
            }, 1);
        },
        dragmove(event) {
            this.x += event.dx;
            this.y += event.dy;
            this.$store.commit('zIndexIncrement', 'resume')
        },
        resizemove(event) {
            this.w = event.rect.width;
            this.h = event.rect.height;

            this.x += event.deltaRect.left;
            this.y += event.deltaRect.top;
        },
        dragMouseDown: function(event) {
            event.preventDefault()
            // get the mouse cursor position at startup:
            this.positions.clientX = event.clientX
            this.positions.clientY = event.clientY
            document.onmousemove = this.elementDrag
            document.onmouseup = this.closeDragElement
        },
        elementDrag: function(event) {
            event.preventDefault()
            this.positions.movementX = this.positions.clientX - event.clientX
            this.positions.movementY = this.positions.clientY - event.clientY
            this.positions.clientX = event.clientX
            this.positions.clientY = event.clientY
            // set the element's new position:
            this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
            this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
        },
        closeDragElement() {
            document.onmouseup = null
            document.onmousemove = null
        },
        minimizeResume(e) {
            e.stopPropagation()
            this.$store.commit('toggleShownResume', false)
            this.$store.commit('changeActiveWindow', 'Finder')
        },
        closeResume(e) {
            e.stopPropagation()
            this.$store.commit('toggleCloseResume', false)
            this.$store.commit('toggleShownResume', false)
        },
    },
    mounted: function() {
        // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        // if (isMobile) {
        //     this.$store.commit('toggleMobileAlert', true)
        //     this.$store.commit('changeActiveWindow', 'MobileAlert')
        //     setTimeout(() => {  
        //         this.$store.commit('zIndexIncrement', 'mobilealert')
        //     }, 1);
        // }

        // Query the element
        const ele = document.getElementById('container');

        // The current position of mouse
        let x = 0;
        let y = 0;

        // The dimension of the element
        let w = 0;
        let h = 0;

        const mouseDownHandlerRight = function(e) {
            x = e.clientX;

            const styles = window.getComputedStyle(ele)
            w = parseInt(styles.width, 10);

            document.addEventListener('mousemove', mouseMoveHandlerRight);
            document.addEventListener('mouseup', mouseUpHandlerRight);
        }

        const mouseDownHandlerLeft = function(e) {
            x = e.clientX;

            const styles = window.getComputedStyle(ele)
            w = parseInt(styles.width, 10);

            document.addEventListener('mousemove', mouseMoveHandlerLeft);
            document.addEventListener('mouseup', mouseUpHandlerLeft);
        }

        const mouseDownHandlerUp = function(e) {
            y = e.clientY;

            const styles = window.getComputedStyle(ele)
            h = parseInt(styles.height, 10);

            document.addEventListener('mousemove', mouseMoveHandlerUp);
            document.addEventListener('mouseup', mouseUpHandlerUp);
        }

        const mouseDownHandlerDown = function(e) {
            y = e.clientY;

            const styles = window.getComputedStyle(ele)
            h = parseInt(styles.height, 10);

            document.addEventListener('mousemove', mouseMoveHandlerDown);
            document.addEventListener('mouseup', mouseUpHandlerDown);
        }

        const mouseMoveHandlerUp = function(e) {
            // How far the mouse has been moved
            const dy = e.clientY - y;

            // Adjust the dimension of element
            ele.style.height = `${h - dy}px`;
        };

        const mouseMoveHandlerDown = function(e) {
            // How far the mouse has been moved
            const dy = e.clientY - y;

            // Adjust the dimension of element
            ele.style.height = `${h + dy}px`;
        };

        const mouseMoveHandlerRight = function(e) {
            // How far the mouse has been moved
            const dx = e.clientX - x;

            // Adjust the dimension of element
            ele.style.width = `${w + dx}px`;
        };

        const mouseMoveHandlerLeft = function(e) {
            // How far the mouse has been moved
            const dx = e.clientX - x;

            // Adjust the dimension of element
            ele.style.width = `${w - dx}px`;
        };

        const mouseUpHandlerUp = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerUp);
            document.removeEventListener('mouseup', mouseUpHandlerUp);
        };

        const mouseUpHandlerDown = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerDown);
            document.removeEventListener('mouseup', mouseUpHandlerDown);
        };

        const mouseUpHandlerRight = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerRight);
            document.removeEventListener('mouseup', mouseUpHandlerRight);
        };

        const mouseUpHandlerLeft = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerLeft);
            document.removeEventListener('mouseup', mouseUpHandlerLeft);
        };
        // Query all resizers
        const resizersRight = ele.querySelectorAll('.resizer-r');
        const resizersUp = ele.querySelectorAll('.resizer-t');
        const resizersDown = ele.querySelectorAll('.resizer-b');
        const resizersLeft = ele.querySelectorAll('.resizer-l');

        [].forEach.call(resizersRight, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerRight);
        });

        [].forEach.call(resizersUp, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerUp);
        });

        [].forEach.call(resizersDown, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerDown);
        });

        [].forEach.call(resizersLeft, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerLeft);
        });
    }
}
</script>