/* eslint-disable */
<template>
    <interact draggable :dragOption="dragOption" class="resize-drag" :style="style" @dragmove="dragmove" @resizemove="resizemove" :class="{ fullscreen: $store.getters.isFullscreenBio}">
        <div class="window" id="container" :class="{ fullscreen: $store.getters.isFullscreenBio, close: !$store.getters.isShownBio}">
            <div class="top-bar" id="top-bar" v-on:dblclick="$store.commit('toggleFullscreenBio')" :class="$store.getters.activeWindow=='Bio' ? 'top-bar' : 'top-bar-deactivated'">
                <div style="color: white; margin-left: 3px; display: flex; align-items: center;"><img class="icon-image" src="../assets/win95Icons/bio.png"/>Biography</div>
                <div class="triple-button">
                    <div class="button-hide" v-on:click="minimizeBio"><span style="height: 2px; width: 6px; background: black; margin-top: 8px; margin-right: 2px;"></span></div>
                    <div class="button-expand" v-on:click="$store.commit('toggleFullscreenBio')"><span style="height: 8px; width: 9px; border-left: black 1px solid; border-right: black 1px solid; border-left: black 1px solid; border-bottom: black 1px solid; border-top: black 2px solid"></span></div>
                    <div style="margin-right: 3px; padding-left: 1px;" class="button-close" v-on:click="closeBio">×</div>
                </div>
            </div>
            <div class="content">
                <div class="scroll-container" :class="{ expandedScrollContainer: $store.getters.isFullscreenBio }">
                    <img class="self" src="../assets/Biography/self.webp" />
                    <div class="header">Don Chia (谢祺恩)</div>
                    <div class="subtitle">Web Developer | iOS Developer | UI/UX Designer | Apple WWDC Scholar 2021</div>
                    <div class="subtitle">Singapore 📍</div>
                    <div class="badge-grid">
                        <img class="badge" alt="Swift" src="https://img.shields.io/badge/-Swift-orange" />
                        <img class="badge" alt="Python" src="https://img.shields.io/badge/-Python-blue" />
                        <img class="badge" alt="JavaScript" src="https://img.shields.io/badge/-Javascript-yellow" />
                        <img class="badge" alt="SQL" src="https://img.shields.io/badge/-SQL-lightgrey" />
                        <img class="badge" alt="Git" src="https://img.shields.io/badge/-Git-critical" />
                        <img class="badge" alt="HTML/CSS" src="https://img.shields.io/badge/-HTML%2FCSS-yellowgreen" />
                        <img class="badge" alt="SwiftUI" src="https://img.shields.io/badge/-SwiftUI-3e8bc3" />
                        <img class="badge" alt="Vue" src="https://img.shields.io/badge/-VueJS-61b083" />
                        <img class="badge" alt="Flask" src="https://img.shields.io/badge/-Flask-406893" />
                        <img class="badge" alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-4ca158" />
                        <img class="badge" alt="SQLite" src="https://img.shields.io/badge/-SQLite-64a2c9" />
                        <img class="badge" alt="Figma" src="https://img.shields.io/badge/-Figma-8c5aee" />
                    </div>
                        <div class="inner-content">
                            <div class="heading"><b>About Me</b></div>
                            <div class="paragraph">Hello there! I am Don from Singapore and I am an 19 year old student who's extremely passionate in both programming and design for both the web and iOS platform. I am currently still a student in high school but let not my age
                                be the key defining factor as I often aim to punch above my weight.</div>
                            <div class="paragraph">I have worked with a mixture of design and frontend/backend technologies, be it for Web Development or iOS Development.</div>
                        </div>
                        <div class="inner-content">
                            <div class="heading"><b>NOSSAFLEX</b></div>
                            <div class="paragraph">NOSSAFLEX is an EXIF organising tool for analog photographers like myself. It was built using Swift along with the newest framework from Apple, SwiftUI and also a NoSQL database from Google, Firebase. It is an organisation based
                                and registered in Australia.</div>
                            <div class="paragraph">Team NOSSAFLEX consists of a small but tightly knit team. They are, Diego from the USA, Josh and his sister, Maddie from Australia and myself from Singapore. We are an international team that complements each other's strengths.
                                Josh being the brains behind this operations leads our team in marketting as well as the UI/UX design of the app, Diego leads the team with his prowness in Swift as a backend language and I lead the team in the frontend department,
                                helping assemble Josh's ideas into reality using SwiftUI.</div>
                            <div class="paragraph">We recently launched our app onto the international App Store, exclusively for iOS and we are proud to see the support the Analog community has given us. Over 1k new and unique users signed up for the app within the first weeks
                                of the launch, not too shabby considering how niche our target group is.</div>
                            <div class="paragraph">You can find out more about NOSSAFLEX by clicking <span style="cursor: pointer; color: #FF5733;" v-on:click="showNossaflex">here</span>.</div>
                        </div>

                        <div class="inner-content">
                            <div class="heading"><b>Apple WWDC Scholar 2021</b></div>
                            <div class="paragraph">My second try at Apple's international coding competition was finally a successful one. Making use of my prowess with web development, I decided to create a Swift Playground project that taught users how to make use of HTML and CSS to create a simple website.</div>
                            <div class="paragraph">Making use of Apple's SwiftUI framework as well as the nifty WKWebView API, I managed to create a working editor that would allow users to meddle with HTML and CSS. I proceeded to create a playground book project around that idea and came up with a tutorial sequence for the user to follow.</div>
                            <div class="paragraph">Check out my submission <a style="color: #FF5733;" href="https://github.com/dhs17y2adonchia/WWDC2021">here</a>!</div>
                            <div class="paragraph">And check out my interview with the local news outlet regarding NOSSAFLEX and my WWDC experience <a style="color: #FF5733;" href="https://www.youtube.com/watch?v=RwtzXxSSJAc">right here</a>!</div>
                        </div>

                        <div class="inner-content">
                            <div class="heading"><b>Internships</b></div>
                            <div class="paragraph">I have had two internship opportunities so far. The first internship was at a local SME firm that created a variety of software technologies for projects and the second internship was a local startup Fintech firm. </div>
                            <div class="paragraph">Throughout the internships I worked with a mixture of iOS and Web Technologies. Storyboarding and UIKit was used in my first tech internship and Vuejs with Bootstrap was used in my second internship as I was a frontend intern.</div>
                        </div>

                        <div class="inner-content">
                            <div class="heading"><b>iOS Developer</b></div>
                            <div class="paragraph">As listed above, I have over a year of experience with SwiftUI and have had plenty of projects that features the use of SwiftUI. SwiftUI was used in most of the components building NOSSAFLEX and the components featured required custom styling to fit our themeing. I have also had the chance to participate in two WWDC Student Challenges in 2020 as well as 2021, both projects featured SwiftUI and a variety of other Swift technologies.</div>
                            <div class="paragraph">Here are some of the projects I have contributed towards. <a style="color: #FF5733;" href="https://github.com/dhs17y2adonchia/WWDC2021">[Submission for WWDC 2021]</a> <a style="color: #FF5733;" href="https://github.com/dhs17y2adonchia/push-pop-push-views-swiftui-example">[Push and Popping Solution for SwiftUI]</a></div>
                        </div>

                        <div class="inner-content">
                            <div class="heading"><b>Web Developer</b></div>
                            <div class="paragraph">As a web developer, I have also had a lot of chances to practice and participate in projects to further hone my skills. I have plenty of experience with backend Python as well as databases using SQL or NoSQL solutions. But most of my time is dedicated to frontend development using Vuejs and elaborate styling of websites (such as this one 😁).</div>
                            <div class="paragraph">Here are some of the projects I have contributed towards. <a style="color: #FF5733;" href="https://github.com/dunmanhigh-isac/dhap-2021">[MUN Website for School]</a> <a style="color: #FF5733;" href="https://github.com/dhs17y2adonchia/marketplace">[CMS Marketplace]</a> <a style="color: #FF5733;" href="https://github.com/zaydek/duomo">[SCSS Library]</a></div>
                        </div>

                        <div class="inner-content">
                            <div class="heading"><b>UI/UX Designer</b></div>
                            <div class="paragraph">Fullstack development is very sought after nowadays and I have made sure to keep up with such trends by honing my skills in UI/UX design as well. I am thankful for the various opportunities I have had to work alongside industry expert and have also taken the chance to learn and hone my UI/UX design skills with tools such as Figma.</div>
                        </div>

                        <!-- <div class="inner-content">
                            <div class="heading"><b>Interests and Hobbies</b></div>
                            <div class="paragraph">Analog photography and colorizing of historical photos have always interested me and some of my photographic works are displayed <span style="cursor: pointer; color: #FF5733;" v-on:click="showPhotos">here</span> while you can find my colorization portfolio <span style="cursor: pointer; color: #FF5733;" v-on:click="showColorization">here</span>.</div>
                        </div> -->

                        <div class="inner-content">
                            <div class="heading"><b>Résumé</b></div>
                            <a style="color: #FF5733;" href="/files/don_chia_resume.pdf" class="paragraph">Check out my résumé here.</a>
                        </div>                
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
            this.$store.commit('zIndexIncrement', 'bio')
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
        minimizeBio(e) {
            e.stopPropagation()
            this.$store.commit('toggleShownBio', false)
            this.$store.commit('changeActiveWindow', 'Finder')
        },
        closeBio(e) {
            e.stopPropagation()
            this.$store.commit('toggleCloseBio', false)
            this.$store.commit('toggleShownBio', false)
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
