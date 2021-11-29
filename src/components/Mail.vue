/* eslint-disable */
<template>
    <interact draggable :dragOption="dragOption" class="resize-drag" :style="style" @dragmove="dragmove" :class="{ fullscreen: $store.getters.isFullscreenMail}">
        <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(this.submitted)  {window.location='https://bigsurmacos.netlify.app/';}"></iframe>
        <form v-on:submit="sendEmail" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdRBqHB0Z6GOjwE3jniX8-fHfJK-WcyzNTmkPFg4fg2SYPwpA/formResponse" class="window" id="container" :class="{ fullscreen: $store.getters.isFullscreenMail, close: !$store.getters.isShownMail}" target="hidden_iframe">
            <div class="top-bar" id="top-bar" v-on:dblclick="$store.commit('toggleFullscreenMail')" :class="$store.getters.activeWindow=='Mail' ? 'top-bar' : 'top-bar-deactivated'">
                <div style="color: white; margin-left: 3px; display: flex; align-items: center;"><img class="icon-image" src="../assets/win95Icons/mail.png"/>New Message</div>
                <div class="triple-button">
                    <div class="button-hide" v-on:click="minimizeMail"><span style="height: 2px; width: 6px; background: black; margin-top: 8px; margin-right: 2px;"></span></div>
                    <div class="button-expand" v-on:click="$store.commit('toggleFullscreenMail')"><span style="height: 8px; width: 9px; border-left: black 1px solid; border-right: black 1px solid; border-left: black 1px solid; border-bottom: black 1px solid; border-top: black 2px solid"></span></div>
                    <div style="margin-right: 3px; padding-left: 1px;" class="button-close" v-on:click="closeMail">×</div>
                </div>
            </div>
             <div class="send-bar">
                 
                 <button type="submit" class="sent" style="z-index: 10;">
                    <span style="display: flex;" class="border">
                        <img src="../assets/send.png" class="icon-image"/>
                        <div style="margin-top: 2px;">Send</div>
                    </span>
                 </button>
                
             </div>
            <div class="content">
                <div class="scroll-container">
                    <div class="container-details">
                        <div class="header">{{$store.getters.mailSubject}}</div>
                        <hr>
                        <div class="subject-container">
                            <p style="margin: 8px;">To:</p>
                            <div class="receipient">Don</div>
                        </div>
                        <hr>
                        <div class="subject-container">
                            <p style="margin: 8px;">Subject:</p>
                            <input name="entry.609946071" class="subject" v-model="mailSubject" v-on:input="onChangeMailSubject" type="text" required="true" />
                        </div>
                        <hr>
                        <div class="from-container" style="margin-bottom: 8px;">
                            <p style="margin: 8px;">From:</p>
                            <input name="entry.367924729" class="subject" v-model="mailSender" v-on:input="onChangeMailSender" type="email" required="true" />
                        </div>
                    </div>

                    <textarea :class="{ textareaFullscreen: $store.getters.isFullscreenMail}" name="entry.863594021" v-model="mailContent" v-on:input="onChangeMailContent" required="true"></textarea>
                </div>
            </div>
        </form>
    </interact>
</template>

<style scoped>
.subject {
    width: 100%;
    background: none;
    border: none;
}

p {
    color: rgb(155, 155, 155);
    margin-right: 5px;
    font-size: 14px;
}

button {
    background: none;
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
    display: flex;
    align-items: center;
    margin: 0;
    font-family: "MS Sans Serif";
    src: url('~@/assets/fonts/MS-Sans-Serif.ttf');
    padding: 0;
    color: black;
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
    background: repeating-conic-gradient(rgb(189, 190, 189) 0% 25%, rgb(255, 255, 255) 0% 50%) 
              50% / 2px 2px;
    border-top: solid rgb(0, 0, 0) 1.5px;
    /* border-left: solid rgb(0, 0, 0) 1.5px; */
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
}

.border {
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
    height: 20px;
    align-items: center;
}

.from-container {
    display: flex;
    height: 20px;
    align-items: center;
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

input {
    outline: none;
}

textarea {
    margin: 0;
    flex-grow: 0.76;
    background: none;
    border-top: solid rgb(0, 0, 0) 1.5px;
    border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
    overflow: auto;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
    caret-color: black;
    color: black;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 14px;
    border-radius: 0;
}

.textareaFullscreen {
    flex-grow: 1;
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

.scroll-container {
    flex-direction: column;
    display: flex;
    height: 100%;
    width: 100%;
}

@media only screen and (max-width: 600px) {
    .window {
        min-width: 50vw;
        width: 90vw;
        max-width: 100vw;
    }
}

.fullscreen {
    width: 100% !important;
    height: var(--fullscreen) !important;
    margin: 0;
    transition: all 0.5s ease;
    padding: 0;
}

.close {
    display: none;
}

.show {
    display: block;
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
    background: #dadada;
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
    margin: 2px;
}

.header {
    font-weight: 700;
    font-size: 28px;
    padding-top: 10px;
    margin-left:8px;
}

.expandedScrollContainer {
    padding-left: 25vw;
    padding-right: 25vw;
}

.paragraph {
    font-weight: 100;
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.paragraph:last-child {
    padding-bottom: 80px;
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
</style>

<script>
import interact from "interactjs";
export default {
    props: {
        // shownProp: Boolean
    },
    data: function() {
        return {
            submitted: false,
            mailSubject: this.checkMail(),
            mailSender: this.$store.getters.mailSender,
            mailContent: this.$store.getters.mailContent,
            positions: {
                clientX: undefined,
                clientY: undefined,
                movementX: 0,
                movementY: 0
            },
            resizeOption: {
                edges: { left: true, right: true, bottom: true, top: true }
            },
            dragOption: {
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: "parent",
                        endOnly: true,
                    })
                ],
                // ignoreFrom: 'textarea',
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
                '--fullscreen': window.innerHeight - 40 + "px",
                '--fullscreen-flex': window.innerHeight/3 + "px"
            };
        }
    },
    methods: {
        sendEmail() {
            setTimeout(() => {  
                this.$store.commit('toggleShownMail', false)
                this.$store.commit('changeActiveWindow', 'Finder')
                this.$store.commit('updateMailSender', '')
                this.$store.commit('updateMailSubject', '')
                this.$store.commit('updateMailContent', '')
                alert('Form successfully sent')
            }, 500);
        },
        checkMail() {
            if (this.$store.getters.mailSubject == 'New Message') {
                return ""
            } else {
                return this.$store.getters.mailSubject
            }
        },
        onChangeMailSubject() {
            if (this.mailSubject.replace(/\s/g, "") == "") {
                this.$store.commit('updateMailSubject', 'New Message')
            } else {
                this.$store.commit('updateMailSubject', this.mailSubject)
            }
        },
        onChangeMailSender() {
            if (this.mailSender.replace(/\s/g, "") == "") {
                this.$store.commit('updateMailSender', '')
            } else {
                this.$store.commit('updateMailSender', this.mailSender)
            }
        },
        onChangeMailContent() {
            if (this.mailContent.replace(/\s/g, "") == "") {
                this.$store.commit('updateMailContent', '')
            } else {
                this.$store.commit('updateMailContent', this.mailContent)
            }
        },
        dragmove(event) {
            this.x += event.dx;
            this.y += event.dy;
            this.$store.commit('zIndexIncrement', 'mail')
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
        onClickLog() {
            alert("Hello! I am an alert box!!");
        },
        minimizeMail(e) {
            e.stopPropagation()
            this.$store.commit('toggleShownMail', false)
            this.$store.commit('changeActiveWindow', 'Finder')
        },
        closeMail(e) {
            e.stopPropagation()
            this.$store.commit('toggleCloseMail', false)
            this.$store.commit('toggleShownMail', false)
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