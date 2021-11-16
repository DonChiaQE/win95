<template>
    <div class="wrapper" :class="{hidden: $store.getters.isFullscreenNossaflex && $store.getters.isShownNossaflex || $store.getters.isFullscreenPhotos && $store.getters.isShownPhotos || $store.getters.isFullscreenStickies && $store.getters.isShownStickies}">
          <div class="bar-container">
                <div alt="start" class="start-menu">
                    <img class="start-icon" src="../assets/win95.png"/>
                    <div style="padding-left: 3px; font-size: 0.9rem; font-weight: bold;">Start</div>
                </div>
            <div class="icon-bar">
              <div alt="Biography" class="icon-bio icon" v-on:click="showBio">Biography</div>
              <div alt="NOSSAFLEX" class="icon-nossaflex icon" v-on:click="showNossaflex">NOSSAFLEX</div>
              <div alt="Photos" class="icon-photo icon" v-on:click="showPhotos">Photos</div>
              <div alt="Mail" class="icon-mail icon" v-on:click="showMail">Mail</div>
              <!-- <div alt="Simulator" class="icon-simulator icon-special" v-on:click="showSimulator"></div> -->
              <div alt="Github" onclick="window.location='https://github.com/dhs17y2adonchia'" class="icon-github icon">GitHub</div>
              <!-- <div alt="Stickies" class="icon-stickies icon" v-on:click="showStickies"></div> -->
            </div>
            <div alt="time" class="time">
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
    width: 65px;
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
    border-radius: 0.5px;
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

@media only screen and (max-width: 700px) { 
    /* .bar-container {
        width: 100vw !important;
        border-radius: 4vw;
        margin-left: 4vw;
        margin-right: 4vw;
        height: 10vw !important;
        padding-top: 2vw;
        padding-bottom: 2vw;
    }
    .icon {
        width: 8vw !important;
        height: 8vw !important;
        margin-left: 1vw !important;
        margin-right: 1vw !important;
        border-radius: 2vw !important;
    }
    .icon-special {
        width: 8.5vw !important;
        height: 8.5vw !important;
        margin-left: 1vw !important;
        margin-right: 1vw !important;
        border-radius: 2vw !important;
    } */

    .icon {
        width: auto !important; 
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
    /* background: blue; */
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

.icon-special {
    margin-top: 3px;
    width: 49px;
    height: 49px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    background: none;
}

.icon-special:hover{
    cursor: pointer;
}

.icon-wip {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-wip:hover {
    cursor: not-allowed;
}

.icon-nossaflex {

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-photo {

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-mail {

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-stickies {

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-github {

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

/* .icon-bio {
    background-image: url('../assets/Icons/Bio.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
} */

.icon-simulator {
    background-image: url('../assets/Icons/Simulator.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
}

@media (prefers-color-scheme: dark) {
    .icon-nossaflex {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
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
        showStickies() {
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
        showSimulator() {
            this.$store.commit('changeActiveWindow', 'Simulator')
            this.$store.commit('toggleShownSimulator', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'simulator')
            }, 1);
        }
    },
    mounted: function() {
        
    }
}
</script>