/* eslint-disable */
<template>
    <interact draggable :dragOption="dragOption" class="resize-drag" :style="style" @dragmove="dragmove" @resizemove="resizemove" :class="{ fullscreen: $store.getters.isFullscreenNossaflex}">
        <div class="window" id="container" :class="{ fullscreen: $store.getters.isFullscreenNossaflex, close: !$store.getters.isShownNossaflex}">
            <div class="top-bar" id="top-bar" v-on:dblclick="$store.commit('toggleFullscreenNossaflex')" :class="$store.getters.activeWindow=='NOSSAFLEX' ? 'top-bar' : 'top-bar-deactivated'">
                <div style="color: white; margin-left: 3px; display: flex; align-items: center;"><img class="icon-image" src="../assets/win95Icons/noss.webp"/>NOSSAFLEX</div>
                <div class="triple-button">
                    <div class="button-hide" v-on:click="minimizeNoss"><span style="height: 2px; width: 6px; background: black; margin-top: 8px; margin-right: 2px;"></span></div>
                    <div class="button-expand" v-on:click="$store.commit('toggleFullscreenNossaflex')"><span style="height: 8px; width: 9px; border-left: black 1px solid; border-right: black 1px solid; border-left: black 1px solid; border-bottom: black 1px solid; border-top: black 2px solid"></span></div>
                    <div style="margin-right: 3px; padding-left: 1px;" class="button-close" v-on:click="closeNoss">×</div>
                </div>
            </div>
            <div class="content">
                <div class="scroll-container" :class="{ expandedScrollContainer: $store.getters.isFullscreenNossaflex }">
                    <div class="hero"></div>
                    <div class="inner-content">
                        <div class="heading"><b>Phase One: The Beginning</b></div>
                        <div class="paragraph">NOSSAFLEX started as two separate entities in the beginning. An idea that festered in my mind as an EXIF data logger app... for the Apple Watch. Sketches of the original app exist in images and they were created using Apple's Storyboarding system. It didn't make much sense to me but when I uploaded it onto online platforms like Reddit, the concept took off and it was an instant hit.</div>
                    </div>
                    <img src="../assets/Nossaflex/watch.webp" class="images"/>
                    <div class="subtitle">Initial Idea</div>
                    <div class="inner-content">
                        <div class="heading"><b>Phase Two: LUCE</b></div>
                        <div class="paragraph">Within my Reddit post was a request for help. I had just learnt how to create storyboards in Swift and was honestly afraid of letting my newfound audience down, I requested anybody with experience working with Swift to come forward and help out. By stroke of luck, I met Diego. Diego was a skilled CS graduate, he had plenty of experience with iOS development and he was more than happy to help out with development.</div>
                        <div class="paragraph">I was glad to have found some help for the app as I quickly learnt that an editor from The Phoblographer had contacted me asking about the Reddit post. Thankfully, Diego came to my rescue and mocked up some ideas for the app really swiftly (pun intended). The Phoblographer article can be found <a href="https://www.thephoblographer.com/2020/03/09/luce-an-app-that-could-help-analog-photographers-log-exif-data/">here</a>. Pretty neat eh?</div>
                    </div>
                    <img src="../assets/Nossaflex/luce.webp" class="images-full"/>
                    <div class="subtitle">LUCE</div>
                    <div class="inner-content">
                        <div class="heading"><b>Phase Three: Merger</b></div>
                        <div class="paragraph">Development started but around April we were contacted by a fan of ours about another app out there that was pretty similar to ours. It was named NOSSAFLEX and it piqued our interests. We quickly got into contact and realised that our idea were pretty much the same. Enter Josh, the brainchild of NOSSAFLEX. A naming system that gave meaning to a bunch of meaningless EXIF strings. NO stood for shot number, SS stood for shutter speed, A stood for aperture, FL stood for focal length and EX stood for exposure.</div>
                        <div class="paragraph">We quickly jumped aboard the idea and progress was made to discuss the app's layout. It was eventually decided that the app would be built with SwiftUI with Firebase as its Database. Josh sprang into action to sketch up some mockups and we got cracking.</div>
                    </div>
                    <div class="inner-content">
                        <div class="heading"><b>Phase Four: Neumorphism</b></div>
                        <div class="paragraph">The first variation of the app featured a UI fad called neumorphism. The design was a fad created by users at dribbble.com who felt that skeumorphism needed to make a comeback again. Now what is skeumorphism exactly? Remember the pre-iOS 9? That's skeumorphism. Book apps that looked like shelves, a calculator that looked like its real life counterpart and a notepad that looked like a real life notepad. That's skeumorphism.</div>
                        <div class="paragraph">Then what's neumorphism? Well, neumorphism is skeumorphism reimagined with a dash of latex. Soft shadows coupled with muted whites and buttons that often created inner shadows gave a feel of pressing a rubber button. It looked and felt good the first few times, but after awhile, the design became a huge eyesore and also an accessibility issue. The shadows were unsightly and it got difficult to use the app after some time.</div>
                        <div class="paragraph">Thankfully, the design was quickly scrapped during the beta phase and we opted for a much simpler and friendly design.</div>
                    </div>
                    <img src="../assets/Nossaflex/neumorphism.webp" class="images-full"/>
                    <div class="subtitle">Why neumorphism is a bad idea</div>
                    <div class="inner-content">
                        <div class="heading"><b>Phase Five: Sketchbook</b></div>
                        <div class="paragraph">The next design we opted for was a much friendlier notebook-esque look. Grid paper, highlighted text coupled with a warm yellow tint for the sketchbook feel gave the app a welcoming feel. The app needed a makeover fast and I quickly got into action, converting all old components into the more clean and sleek design. Josh furthered the design by creating lottie animations that played whenever the users booted up the app, patents of a variety of camera equipments and accessories were painstakingly drawn out by Josh.</div>
                        <div class="paragraph">Diego on the other hand tolled hard to ensure that our much anticipated feature, the lightmeter, got pushed out on time. The app was finally completed around the end of December and the final rounds of beta testing was ending.</div>
                    </div>
                    <img src="../assets/Nossaflex/notebook.webp" class="images-full"/>
                    <div class="subtitle">Sketchbook Design</div>
                    <div class="inner-content">
                        <div class="heading"><b>Phase Six: App Store Launch</b></div>
                        <div class="paragraph">The app was finally launched on 5th February of 2021 after over a year of development. It was an instant hit with the community, garnering support from Reddit, Youtube and Facebook forums alike. Users from all around the world signed up for the app and we had over a thousand users within the first week. Thousands of pieces of data was being logged daily by users and we were heartened to see daily usage in our app.</div>
                    </div>
                    <img src="../assets/Nossaflex/appstore.webp" class="images-full"/>
                    <div class="subtitle">We're live!</div>
                    <div class="inner-content">
                        <div class="heading"><b>Phase Seven: Beyond iOS</b></div>
                        <div class="paragraph">Now that iOS was done, we set our sights for the next frontier, the Web and Android. Our current goal is to create a web app that users are able to access through their phones or laptops, allowing them to attach EXIF data to their photo with much more ease.</div>
                    </div>
                    <br>
                    <a href="https://www.nossaflex.io" style="padding-bottom: 80px; color: #FF5733;">NOSSAFLEX</a>
                </div>
            </div>
            <!-- <div class="resizer resizer-b"></div>
                                <div class="resizer resizer-l"></div>
                                <div class="resizer resizer-t"></div>
                                <div class="resizer resizer-r"></div> -->
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
    border-radius: 0.5px;
    max-width: 100%;
    align-items: flex-end;
    outline: rgb(222, 222, 222) 1px solid;
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

.hero {
    width: 100%;
    height: 200px;
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 1px solid rgb(0, 0, 0, 0.1);
    background-image: url('../assets/Nossaflex/hero_light.webp');
}

.images {
    width: 100%;
    height: 350px ;
    object-fit: cover;
}

.images-full {
    width: 100%;
    height: auto ;
    object-fit: cover;
}

.subtitle {
    font-size: 12px;
    color: gray;
    text-align: center;
}

.heading {
    padding-bottom: 5px;
}

.inner-content {
    padding-top: 30px;
}

.inner-content:last-child {
    padding-bottom: 30px;
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
                '--fullscreen': window.innerHeight - 40 + "px"
            };
        }
    },
    methods: {
        dragmove(event) {
            this.x += event.dx;
            this.y += event.dy;
            this.$store.commit('zIndexIncrement', 'noss')
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
        minimizeNoss(e) {
            e.stopPropagation()
            this.$store.commit('toggleShownNossaflex', false)
            this.$store.commit('changeActiveWindow', 'Finder')
        },
        closeNoss(e) {
            console.log('close')
            e.stopPropagation()
            this.$store.commit('toggleCloseNossaflex', false)
            this.$store.commit('toggleShownNossaflex', false)
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