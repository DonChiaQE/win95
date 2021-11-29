<template>
    <!-- <div class="wrapper" :class="{hidden: $store.getters.isFullscreenNossaflex && $store.getters.isShownNossaflex || $store.getters.isFullscreenPhotos && $store.getters.isShownPhotos || $store.getters.isFullscreenStickies && $store.getters.isShownStickies}"> -->
    <div class="wrapper">  
          <div class="bar-container">
                <div alt="start" class="start-menu" v-on:click="showMenu" :class="$store.getters.activeWindow=='Menu' ? 'start-menu-depressed' : 'start-menu'">
                    <div class="" :class="$store.getters.activeWindow=='Menu' ? 'border' : 'container-border'">
                        <img class="start-icon" src="../assets/win95.png"/>
                        <div style="padding-left: 3px; font-size: 0.9rem; font-weight: bold;">Start</div>
                    </div>
                </div>
            <div class="icon-bar">
                    <div alt="Biography" class="icon-bio" v-on:click="showBio" :class="[$store.getters.activeWindow=='Bio' ? 'icon-depressed' : 'icon', $store.getters.isCloseBio ? '' : 'hidden']"> 
                        <img class="icon-image" src="../assets/win95Icons/bio.png"/>
                        Biography
                    </div>
                    
                    <div alt="NOSSAFLEX" class="icon-nossaflex" v-on:click="showNossaflex" :class="[$store.getters.activeWindow=='NOSSAFLEX' ? 'icon-depressed' : 'icon', $store.getters.isCloseNossaflex ? '' : 'hidden']">
                        <img class="icon-image" src="../assets/win95Icons/noss.webp"/>
                        NOSSAFLEX
                    </div>
        
                    <div alt="Photos" class="icon-photo " v-on:click="showPhotos" :class="[$store.getters.activeWindow=='Photos' ? 'icon-depressed' : 'icon', $store.getters.isClosePhotos ? '' : 'hidden']">
                        <img class="icon-image" src="../assets/win95Icons/photos.png"/>
                        Photos
                    </div>
                    
                    <div alt="Mail" class="icon-mail " v-on:click="showMail" :class="[$store.getters.activeWindow=='Mail' ? 'icon-depressed' : 'icon', $store.getters.isCloseMail ? '' : 'hidden']">
                        <img class="icon-image" src="../assets/win95Icons/mail.png"/>
                        Mail
                    </div>

                    <div alt="Resume" class="icon-resume " v-on:click="showResume" :class="[$store.getters.activeWindow=='Resume' ? 'icon-depressed' : 'icon', $store.getters.isCloseResume ? '' : 'hidden']">
                        <img class="icon-image" src="../assets/iPhone-Icons/resume.png"/>
                        Résumé
                    </div>
                    <div alt="Resume" class="icon-resume " v-on:click="showMobileAlert" :class="[$store.getters.activeWindow=='MobileAlert' ? 'icon-depressed' : 'icon', $store.getters.isMobileAlert ? '' : 'hidden']">
                        <img class="icon-image" src="../assets/warning.png"/>
                        Warning
                    </div>
              <!-- <div alt="Simulator" class="icon-simulator icon-special" v-on:click="showSimulator"></div> -->
              <!-- <div alt="Stickies" class="icon-stickies icon" v-on:click="showStickies"></div> -->
            </div>
            <div alt="time" class="time">
                <img src="../assets/speakers.png" class="icon-image"/>
                <span>{{this.time}}</span>
            </div>
          </div>
        </div>
</template>

<style scoped>
.hidden {
    display: none !important;
}

.bar-container {
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    background: rgb(192, 192, 192);
    border-top: solid rgb(250, 250, 250) 2px;
}

.time {
    width: 75px;
    margin: 5px;
    height: 25px;
    background: rgb(192, 192, 192);
    border-right: solid rgb(250, 250, 250) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-top: solid rgb(90, 90, 90) 1.5px;
    border-left: solid rgb(90, 90, 90) 1.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-size: 0.6em;
}

.start-icon {
    width: 18px;
    height: 18px;
}

.start-menu {
    width: 65px;
    margin: 5px;
    height: 23px;
    box-shadow: 1.5px 1.5px black;
    border-top: solid rgb(250, 250, 250) 1.5px;
    border-left: solid rgb(250, 250, 250) 1.5px;
    border-bottom: solid rgb(90, 90, 90) 1.5px;
    border-right: solid rgb(90, 90, 90) 1.5px;
    background: rgb(192, 192, 192);

    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
    align-items: center;
}

.start-menu:hover {
    cursor: pointer;
}

.start-menu:active {
    background: rgb(192, 192, 192);
    box-shadow: none;
    border-top: solid rgb(0, 0, 0) 1.5px;
    border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
}

.start-menu-depressed {
    box-shadow: none;
    background: repeating-conic-gradient(rgb(189, 190, 189) 0% 25%, rgb(255, 255, 255) 0% 50%) 
              50% / 2px 2px;
    border-top: solid rgb(0, 0, 0) 1.5px;
    border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
}

.container-border {
    display: flex;
    justify-content: center;
    align-items: center;
}

.border {
    display: flex;
    justify-content: center;
    align-items: center;
    border: black dotted 1px;
}

.bar {
    display: flex;
    flex-direction: row;
}

.icon-depressed {
    width: 100px;
    height: 23px;
    border-radius: 10px;
    margin-left: 2px;
    margin-right: 2px;
    border-radius: 0.5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: bold;
    font-size: 0.7rem;
    background: rgb(192, 192, 192);
    box-shadow: none;
    background: repeating-conic-gradient(rgb(189, 190, 189) 0% 25%, rgb(255, 255, 255) 0% 50%) 
              50% / 2px 2px;
    border-top: solid rgb(0, 0, 0) 1.5px;
    border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
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

.icon-image {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}

@media only screen and (max-width: 700px) { 
    .icon {
        width: auto !important; 
    }
    .icon-depressed {
        width: auto !important; 
    }
    .icon-image {
    width: 0px;
    height: 0px;
    margin-right: 0px;
}
}

.wrapper {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.icon-bar {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

.icon {
    width: 100px;
    height: 23px;
    border-radius: 10px;
    margin-left: 2px;
    margin-right: 2px;
    box-shadow: 1.5px 1.5px black;
    border-top: solid rgb(250, 250, 250) 1.5px;
    border-left: solid rgb(250, 250, 250) 1.5px;
    border-bottom: solid rgb(90, 90, 90) 1.5px;
    border-right: solid rgb(90, 90, 90) 1.5px;
    background: rgb(192, 192, 192);
    border-radius: 0.5px;
    display: flex;
    justify-content: flex-start;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: bold;
    font-size: 0.7rem;
}

.icon:hover{
    cursor: pointer;
}

.icon:active {
    background: rgb(192, 192, 192);
            box-shadow: none;
    border-top: solid rgb(0, 0, 0) 1.5px;
    border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
}
</style>

<script>
import moment from 'moment'
export default {
    props: {
        shownProp: Boolean
    },
    data() {
        return {
            showHello: this.shownProp,
            time: '',
            date: ''
        }
    },
    beforeMount() {
        setInterval(() => {
            this.time = moment().format('hh:mm A')
        }, 1000)
        setInterval(() => {
            this.date = moment().format('ddd DD MMMM')
        }, 1000)
    },
    methods: {
        toggleShow() {
            this.showHello = false;
        },
        showNossaflex() {
            this.$store.commit('changeActiveWindow', 'NOSSAFLEX')
            this.$store.commit('toggleShownNossaflex', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'noss')
            }, 1);
        },
        showPhotos() {
            this.$store.commit('changeActiveWindow', 'Photos')
            this.$store.commit('toggleShownPhotos', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'photos')
            }, 1);
        },
        showStickies() { //deprecated
            this.$store.commit('changeActiveWindow', 'Stickies')
            this.$store.commit('toggleShownStickies', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'stickies')
            }, 1);
        },
        showMail() {
            this.$store.commit('changeActiveWindow', 'Mail')
            this.$store.commit('toggleShownMail', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'mail')
            }, 1);
        },
        showBio() {
            this.$store.commit('changeActiveWindow', 'Bio')
            this.$store.commit('toggleShownBio', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'bio')
            }, 1);
        },
        showSimulator() { // deprecated
            this.$store.commit('changeActiveWindow', 'Simulator')
            this.$store.commit('toggleShownSimulator', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'simulator')
            }, 1);
        },
        showMenu() {
            this.$store.commit('changeActiveWindow', 'Menu')
            this.$store.commit('toggleShownMenu', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'menu')
            }, 1);
        },
        showResume() {
            this.$store.commit('changeActiveWindow', 'Resume')
            this.$store.commit('toggleShownResume', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'resume')
            }, 1);
        },
        showMobileAlert() {
            this.$store.commit('changeActiveWindow', 'MobileAlert')
            this.$store.commit('toggleMobileAlert', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'mobilealert')
            }, 1);
        }
    },
    mounted: function() {
        
    }
}
</script>