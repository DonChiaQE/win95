/* eslint-disable */
<template>
    <interact draggable :dragOption="dragOption" class="resize-drag" :style="style" @dragmove="dragmove" @resizemove="resizemove">
        <div class="about-me" id="container" :class="{close: !$store.getters.isShownSimulator}">
            <div class="top-bar" id="top-bar">
                <div class="triple-button">
                    <div class="button-red" v-on:click="closeSimulator"></div>
                    <div class="button-yellow"></div>
                    <div class="button-green"></div>
                </div>
                <div class="phone-info">
                    <b class="info" style="font-size: 14px;">iPhone SE</b>
                    <p class="info" style="font-size: 10px; color: rgb(165, 164, 164); font-weight: 700;">iOS 14.4</p>
                </div>
            </div>
            <div class="iphone-container">
                <div class="iphone-left-buttons">
                    <div class="buttons-left">
                        <div class="silence"></div>
                        <div class="up"></div>
                        <div class="down"></div>
                    </div>
                </div>
                <div class="iphone">
                    <div v-if="!locked && !lockScreen" class="iphone-screen">
                        <div class="iphone-bar">
                            <p class="bar-info">Carrier</p>
                            <p class="bar-info">{{this.time}}</p>
                            <img style="width: 22px; height: 10px;" src="../assets/battery.webp" />
                        </div>
                        <div class="iphone-grid">
                            <div class="row">
                                <div class="column">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/dhs17y2adonchia" style="text-align: center; text-decoration: none;">
                                        <img style="cursor: pointer;" src="../assets/iPhone-Icons/Github.webp" class="iphone-grid-icon" />
                                        <div style="margin: 0; padding: 0;" class="subtitle">GitHub</div>
                                    </a>
                                </div>
                                <div class="column">
                                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lizarDON2303" style="text-align: center; text-decoration: none;">
                                        <img style="cursor: pointer;" src="../assets/iPhone-Icons/Twitter.webp" class="iphone-grid-icon"  />
                                        <div style="margin: 0; padding: 0;" class="subtitle">Twitter</div>
                                    </a>
                                </div>
                                <div class="column">
                                     <a style="text-align: center; text-decoration: none;">
                                        <img style="cursor: not-allowed;" src="../assets/Icons/WIP.webp" class="iphone-grid-icon" />
                                        <div style="margin: 0; padding: 0;" class="subtitle">Installing...</div>
                                     </a>
                                </div>
                                <div class="column">
                                    <a style="text-align: center; text-decoration: none;">
                                    <img style="cursor: not-allowed;" src="../assets/Icons/WIP.webp" class="iphone-grid-icon" />
                                    <div style="margin: 0; padding: 0;" class="subtitle">Installing...</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="iphone-nav">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/__dontax__" class="iphone-icon instagram-icon"></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/user/satoshigekkouga2303" class="iphone-icon reddit-icon"></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/don-chia-0b518b160/" class="iphone-icon linkedin-icon"></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/app/nossaflex/id1523558285" class="iphone-icon nossaflex-icon"></a>
                        </div>
                    </div>
                    <div v-if="locked" class="iphone-locked">
    
                    </div>
                    <div v-if="lockScreen" class="iphone-lock-screen">
                        <div class="iphone-bar">
                            <p class="bar-info">Carrier</p>
                            <!-- <p class="bar-info">{{this.time}}</p> -->
                            <img style="width: 22px; height: 10px;" src="../assets/battery.webp" />
                        </div>
                        <div class="iphone-lock-main">
                            <p style="color: white; font-weight: 200; font-size: 60px; margin: 0; padding: 0;">{{this.timeLock}}</p>
                            <p style="color: white; font-weight: 500; font-size: 20px; margin: 0; padding: 0;">{{this.dateLock}}</p>
                        </div>
                        <div class="iphone-unlock">
                            <p style="font-weight: 700; color: white;">Press home to unlock</p>
                        </div>
                    </div>
                    <div class="button" @click="showLockedScreen"></div>
                </div>
                <div class="iphone-right-buttons">
                    <div class="buttons-right">
                        <div class="lock" @click="lockiPhone"></div>
                    </div>
                </div>
            </div>
        </div>
    </interact>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
    opacity: 1;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.iphone {
    height: 660px;
    width: 340px;
    background: rgb(26, 25, 25);
    border-radius: 55px;
    ;
    margin-top: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 20px 0 rgba(0, 0, 0, 0.24);
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: solid rgb(58, 58, 64, 0.5);
    flex-direction: column;
}

.iphone-container {
    display: flex;
}

.iphone-unlock {
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: space-between;
}

.iphone-left-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.iphone-right-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.buttons-left {
    margin-bottom: 300px;
}

.buttons-right {
    margin-bottom: 320px;
}

.silence {
    width: 5px;
    height: 35px;
    background: rgb(44, 43, 43);
    margin-bottom: 28px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.up {
    width: 5px;
    height: 62px;
    background: rgb(44, 43, 43);
    margin-bottom: 4px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.down {
    width: 5px;
    height: 62px;
    background: rgb(44, 43, 43);
    margin-top: 4px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.lock {
    width: 5px;
    height: 62px;
    background: rgb(44, 43, 43);
    margin-top: 4px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
}

.lock:hover {
    width: 10px;
    animation: normal;
}

.iphone-screen {
    height: 490px;
    width: 285px;
    background: url('../assets/iphone-light.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right top;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.iphone-locked {
    height: 490px;
    width: 285px;
    background: black;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.iphone-lock-screen {
    height: 490px;
    width: 285px;
    background: url('../assets/iphone-light.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right top;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: all 0.5s ease-in;
}

.iphone-bar {
    display: flex;
    color: white;
    justify-content: space-between;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 2px;
    align-items: center;
}

.bar-info {
    padding: 0;
    margin: 0;
    color: white;
    font-size: 12px;
    font-weight: 500;
}

.iphone-grid {
    flex-grow: 1;
}

.column {
    margin-top: 10px;
    float: left;
    width: 25%;
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.row:after {
    display: table;
}

.iphone-lock-main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-bottom: 200px;
}

.iphone-nav {
    background: rgb(255, 255, 255, 0.4);
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: space-between;
}

.iphone-grid-icon {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background: none;
}

.subtitle {
    margin-top: 4px;
    font-size: 10px;
    color: white;
    font-weight: 500;
}

.iphone-icon {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    background: none;
}

.instagram-icon {
    background-image: url('../assets/iPhone-Icons/Instagram.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.reddit-icon {
    background-image: url('../assets/iPhone-Icons/Reddit.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.linkedin-icon {
    background-image: url('../assets/iPhone-Icons/Linkedin.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.nossaflex-icon {
    background-image: url('../assets/iPhone-Icons/Nossaflex.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-wip {
    background-image: url('../assets/Icons/WIP.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.button {
    border-radius: 50%;
    border: solid rgb(106, 106, 106);
    height: 54px;
    width: 54px;
    margin-bottom: 5px;
}

.button:hover {
    cursor: pointer;
}

.button:active {
    background: rgb(72, 72, 71);
}

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

.about-me {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media only screen and (max-width: 600px) {
    .about-me {
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

.top-bar {
    display: flex;
    height: 50px;
    width: 100%;
    background: rgb(43, 42, 41);
    z-index: 10;
    border-radius: 15px;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 20px 0 rgba(0, 0, 0, 0.24);
}

.triple-button {
    display: flex;
    padding-left: 15px;
    align-items: center;
    width: 50px;
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
    background: rgb(221, 220, 220);
}

.button-red:hover {
    cursor: pointer;
}

.button-yellow:hover {
    cursor: pointer;
}

.phone-info {
    margin-left: 20px;
}

.info {
    padding: 0;
    margin: 0;
    color: white;
}

@media (prefers-color-scheme: dark) {
    .hello {
        color: white
    }
    .iphone-screen {
        background-image: url('../assets/iphone-dark.webp');
    }
    .iphone-lock-screen {
        background-image: url('../assets/iphone-dark.webp');
    }
}
</style>

<script>
import moment from 'moment'
import interact from "interactjs";
export default {
    props: {
        // shownProp: Boolean
    },
    beforeMount() {
        setInterval(() => {
            this.time = moment().format('hh:mm A')
        }, 50)
        setInterval(() => {
            this.timeLock = moment().format('hh:mm')
        }, 50)
        setInterval(() => {
            this.dateLock = moment().format('dddd, MMMM DD')
        }, 50)
        setInterval(() => {
            this.date = moment().format('ddd DD MMMM')
        }, 50)
    },
    data: function() {
        return {
            time: '',
            timeLock: '',
            dateLock: '',
            date: '',
            locked: false,
            lockScreen: true,
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

        }
    },
    computed: {
        style() {
            return {
                height: `${this.h}px`,
                width: `${this.w}px`,
                transform: `translate(${this.x}px, ${this.y}px)`,
                '--fullscreen': window.innerHeight - 30 + "px"
            };
        }
    },
    methods: {
        dragmove(event) {
            this.x += event.dx;
            this.y += event.dy;
            this.$store.commit('zIndexIncrement', 'simulator')
        },
        resizemove(event) {
            this.w = event.rect.width;
            this.h = event.rect.height;

            this.x += event.deltaRect.left;
            this.y += event.deltaRect.top;
        },
        lockiPhone() {
            if (this.lockScreen == false && this.locked == false) {
                this.locked = true
            } else if (this.locked == true && this.lockScreen == false) {
                this.lockScreen = true
                this.locked = false
            } else {
                this.locked = true
                this.lockScreen = false
            }
        },
        showLockedScreen() {
            if (this.locked == true && this.lockScreen == false) {
                this.lockScreen = true
                this.locked = false
            } else if (this.locked == false && this.lockScreen == true) {
                this.lockScreen = false
                this.locked = false
            }
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
        closeSimulator(e) {
            e.stopPropagation()
            this.$store.commit('toggleShownSimulator', false)
            this.$store.commit('changeActiveWindow', 'Finder')
        }
    },
    mounted: function() {
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