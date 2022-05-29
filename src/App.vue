<template>
<div id="app">
    <top-navbar id="top-navbar"></top-navbar>
    <div class="screen" id="screen" @click="deinitWindows">
        <div 
            v-for="window in windows" 
            :key="window.key" 
            :aria-label="window.displayName"
        >
            <component
                :is="window.windowComponent" 
                :nameOfWindow="window.windowId" 
                :content_padding_bottom="window.windowContentPadding['bottom']"
                :content_padding_left="window.windowContentPadding['left']"
                :content_padding_right="window.windowContentPadding['right']"
                :content_padding_top="window.windowContentPadding['top']"
                :id="window.windowId" 
                :style="{position: window.position, left: window.positionX, top: window.positionY}" 
                v-if="windowCheck(window.windowId)"
            >
                <component 
                    :is="window.windowContent"
                    slot="content"
                >
                </component>
            </component>
            <StartMenu v-if="$store.getters.getActiveWindow=='Menu'" style="position: absolute; z-index: 9999; bottom: 0; left: 0;"></StartMenu>
        </div>
        <app-grid></app-grid>
    </div>
    <navbar id="navbar" />
</div>
</template>

<style>
/*---------------------------------------------------------------------------*\
    CSS Imports
    Change 'blueprint' to 'windows' or 'macos' to use windows or macos theme
\*---------------------------------------------------------------------------*/
@import './assets/css/utils/normalize.css';
@import './assets/css/windows/app.css';
@import './assets/css/windows/window.css';
@import './assets/css/windows/appgrid.css';

@font-face {
    font-family: "MS Sans Serif";
    src: url('~@/assets/fonts/MS-Sans-Serif.ttf');
}

/*-------------------------------------------*\
    Utilities
\*-------------------------------------------*/

html {
    overflow: hidden;
}

#app {
    font-family: 'MS Sans Serif';
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    flex-direction: column;
}

.screen {
    width: 100%;
    position: relative;
    z-index: 999;
}

::-webkit-scrollbar {
  width: 15px;
  background: repeating-conic-gradient(rgb(189, 190, 189) 0% 25%, rgb(255, 255, 255) 0% 50%) 
              50% / 2px 2px;
}
::-webkit-scrollbar-thumb {
  background: rgb(189, 190, 189);
  /* box-shadow: 1.5px 1.5px black; */
    border-top: solid rgb(250, 250, 250) 1.5px;
    border-left: solid rgb(250, 250, 250) 1.5px;
    border-bottom: solid rgb(90, 90, 90) 1.5px;
    border-right: solid rgb(90, 90, 90) 1.5px;
    outline: rgb(219,219,219);
}

/*-------------------------------------------*\
    Fullscreen
\*-------------------------------------------*/

.fullscreen {
    left: 0 !important;
    position: relative;
    display: block;
    top: 0 !important;
    right: 0 !important;
}
</style>

<script>
/*------------------------------------------------------------*\
    Import Components, you can change the path for different
    component themes (blueprint, windows, macos)
\*------------------------------------------------------------*/
import Navbar from './components/windows/Navbar'
// import TopNavbar from './components/macos/TopNavbar.vue'
import Window from './components/template/Window'
import AppGrid from './components/AppGrid'
import Placeholder from './components/views/Placeholder'
import Photos from './components/views/Photos'
import Bio from './components/views/Bio'
import Resume from './components/views/Resume'
import Nossaflex from './components/views/Nossaflex'
import Mail from './components/template/Mail'
import StartMenu from './components/StartMenu.vue'
import Webos from './components/template/WebOS'
import Opensource from './components/views/Opensource'
import Wwdc2021 from './components/views/Wwdc2021'
import Wwdc2022 from './components/views/Wwdc2022'
export default {
    name: 'App',
    data: function () {
        return {
            windows: this.$store.getters.getWindows,
            windowComponents: {}
        }
    },
    components: {
        Window,
        Navbar,
        AppGrid,
        Placeholder,
        Photos,
        Bio,
        Resume,
        Nossaflex,
        Mail,
        StartMenu,
        Webos,
        Opensource,
        Wwdc2021,
        Wwdc2022
        // TopNavbar,
    },
    computed: {
        style() {
            return {
                '--fullscreen': this.$store.getters.getFullscreenWindowHeight
            };
        }
    },
    mounted() {
        /*-------------------------------------------------*\
            This fixes height problems for mobile devices 

            Code is detecting height of navbar and setting
            respective heights of screen
        \*-------------------------------------------------*/

        let navbar = document.getElementById('navbar')
        let topnavbar = document.getElementById('top-navbar')
        let topNavbarHeight = topnavbar.clientHeight
        let navbarHeight = navbar.clientHeight

        document.getElementById('screen').style.height = window.innerHeight - navbarHeight - topNavbarHeight + "px";

        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

        function resetHeight() {
            document.body.style.height = window.innerHeight + "px";
            document.html.style.height = window.innerHeight + "px";
        }
        window.addEventListener("resize", resetHeight);
        this.$store.commit('setFullscreenWindowHeight', window.innerHeight - navbarHeight - topNavbarHeight + "px");
        this.openWindow('BiographyWindow')
    },
    methods: {
        openWindow(windowId) {
            const payload = {
                'windowState': 'open',
                'windowID': windowId
            }
            this.$store.commit('setWindowState', payload)
        },

        windowCheck(windowId) {
            if (this.$store.getters.getWindowById(windowId).windowState == 'open') {
                return true
            }
        },

        deinitWindows() {
            if (this.$store.getters.getActiveWindow=='Menu') {
                console.log('deinitWindows')
            this.$store.commit('setActiveWindow', '')
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', '')
                }, 0);
            }
        }
    },
}
</script>