<template>
    <div class="wrapper" :class="{hidden: $store.getters.isFullscreenNossaflex && $store.getters.isShownNossaflex || $store.getters.isFullscreenPhotos && $store.getters.isShownPhotos || $store.getters.isFullscreenStickies && $store.getters.isShownStickies}">
          <div class="bar-container">
              <div alt="Biography" class="icon-bio icon" v-on:click="showBio"></div>
              <div alt="NOSSAFLEX" class="icon-nossaflex icon" v-on:click="showNossaflex"></div>
              <div alt="Photos" class="icon-photo icon" v-on:click="showPhotos"></div>
              <div alt="Mail" class="icon-mail icon" v-on:click="showMail"></div>
              <div alt="Simulator" class="icon-simulator icon-special" v-on:click="showSimulator"></div>
              <div alt="Github" onclick="window.location='https://github.com/dhs17y2adonchia'" class="icon-github icon"></div>
              <div alt="Stickies" class="icon-stickies icon" v-on:click="showStickies"></div>
          </div>
        </div>
</template>

<style scoped>
.hidden {
    display: none !important;
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

@media only screen and (max-width: 600px) { 
    .bar-container {
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
    }
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
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    background: none;
}

.icon:hover{
    cursor: pointer;
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
    background-image: url('../assets/Icons/WIP.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-wip:hover {
    cursor: not-allowed;
}

.icon-nossaflex {
    background-image: url('../assets/Icons/NossaflexLight.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-photo {
    background-image: url('../assets/Icons/Photo.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-mail {
    background-image: url('../assets/Icons/Mail.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-stickies {
    background-image: url('../assets/Icons/Stickies.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-github {
    background-image: url('../assets/Icons/Github.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-bio {
    background-image: url('../assets/Icons/Bio.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon-simulator {
    background-image: url('../assets/Icons/Simulator.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
}

@media (prefers-color-scheme: dark) {
    .icon-nossaflex {
    background-image: url('../assets/Icons/NossaflexDark.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
}
</style>

<script>
export default {
    props: {
        shownProp: Boolean
    },
    data() {
        return {
            showHello: this.shownProp
        }
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