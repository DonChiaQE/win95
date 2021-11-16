<template>
    <div id="app">
        <TopNav />
        <div class="screen" id="screen" style="position: relative;">
            <nossaflex id="noss" :class="{fullscreen: $store.getters.isFullscreenNossaflex}" v-if="$store.getters.isShownNossaflex" style=" position: absolute;" @click.native="focusNoss" />
            <photos-modal id="photos" :class="{fullscreen: $store.getters.isFullscreenPhotos}" v-if="$store.getters.isShownPhotos" style=" position: absolute;" @click.native="focusPhotos" />
            <stickies id="stickies" :class="{fullscreen: $store.getters.isFullscreenStickies}" v-if="$store.getters.isShownStickies" style=" position: absolute;" @click.native="focusStickies" />
            <mail id="mail" :class="{fullscreen: $store.getters.isFullscreenMail}" v-if="$store.getters.isShownMail" style=" position: absolute;" @click.native="focusMail" />
            <bio id="bio" :class="{fullscreen: $store.getters.isFullscreenBio}" v-if="$store.getters.isShownBio" style=" position: absolute; top: 5%; left: 5vw" @click.native="focusBio" />
            <simulator id="simulator" v-if="$store.getters.isShownSimulator" style=" position: absolute; left:25%;" @click.native="focusSimulator" />
            <colorization id="colorization" v-if="$store.getters.isShownColorization" style="position: absolute;" @click.native="focusColorization" />
        </div>
        <navbar/>
    </div>
</template>

<script>
import Nossaflex from './components/Nossaflex.vue'
import Navbar from './components/Navbar'
import TopNav from './components/TopNav'
import PhotosModal from './components/PhotosModal.vue'
import Stickies from './components/Notepad.vue'
import Mail from './components/Mail.vue'
import Bio from './components/Bio.vue'
import Simulator from './components/Simulator.vue'
import Colorization from './components/Colorization.vue'

export default {
    name: 'App',
    data: function() {
        return {

        }
    },
    components: {
        Nossaflex,
        PhotosModal,
        Navbar,
        TopNav,
        Stickies,
        Mail,
        Bio,
        Simulator,
        Colorization
    },
    methods: {
        focusPhotos() {
            this.$store.commit('changeActiveWindow', 'Photos')
            this.$store.commit('zIndexIncrement', 'photos')
        },
        focusNoss() {
            this.$store.commit('changeActiveWindow', 'NOSSAFLEX')
            this.$store.commit('zIndexIncrement', 'noss')
        },
        focusStickies() {
            this.$store.commit('changeActiveWindow', 'Stickies')
            this.$store.commit('zIndexIncrement', 'stickies')
        },
        focusMail() {
            this.$store.commit('changeActiveWindow', 'Mail')
            this.$store.commit('zIndexIncrement', 'mail')
        },
        focusBio() {
            this.$store.commit('changeActiveWindow', 'Bio')
            this.$store.commit('zIndexIncrement', 'bio')
        },
        focusSimulator() {
            this.$store.commit('changeActiveWindow', 'Simulator')
            this.$store.commit('zIndexIncrement', 'simulator')
        },
        focusColorization() {
            this.$store.commit('changeActiveWindow', 'Colorization')
            this.$store.commit('zIndexIncrement', 'colorization')
        }
    },
    computed: {
        style() {
            return {
                '--fullscreen': window.innerHeight - 30 + "px"
            };
        }
    },
    mounted() {
        document.getElementById('screen').style.height = window.innerHeight - 30 + "px";
        document.addEventListener("keydown", function(e) {
            if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 83) {
                e.preventDefault();
                if (this.$store.getters.activeWindow == "Stickies") {
                    console.log('cmd s up coz stickies on')
                } else {
                    console.log('not caught')
                }
            }
        }, false);
        // We listen to the resize event
        window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

        function resetHeight() {
            // reset the body height to that of the inner browser
            document.body.style.height = window.innerHeight + "px";
            document.html.style.height = window.innerHeight + "px";
        }
        // reset the height whenever the window's resized
        window.addEventListener("resize", resetHeight);
        // called to initially set the height.
        resetHeight();
    }
}
</script>

<style>
html {
    overflow: hidden;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    flex-direction: column;
    overflow: hidden;
}

.screen {
    width: 100%;
}

.fullscreen {
    left: 0 !important;
    position: relative;
    display: block;
    top: 0 !important;
    right: 0 !important;
}

body {
    margin: 0;
    padding: 0;
    overflow: hidden;
}

body {
    background-image: url('./assets/light.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

@media (prefers-color-scheme: dark) {
    body {
        background-image: url('./assets/dark.webp');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
}

.bar-container {
    width: auto;
    height: 70px;
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgb(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.wrapper {
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.icon {
    width: 45px;
    height: 45px;
    border-radius: 10px;
    background: white;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
}

.icon:hover {
    cursor: pointer;
}
</style>
