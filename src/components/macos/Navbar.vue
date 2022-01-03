<template>
<div class="wrapper">
<nav class="navbar-container">
    <div 
        v-for="window in this.windows" 
        :key="window.key"
    >
        <button 
            @click="openWindow(window.windowId)" 
            class="navbar-item"
            :style="{backgroundImage: 'url(' + require('../../assets/icons/' + window.iconImage) + ')'}"
            :alt="window.altText"
        >
        </button>
    </div>
</nav>
</div>
</template>

<style scoped>
/*-------------------------------------------*\
    Container
\*-------------------------------------------*/

.navbar-container {
    width: auto;
    height: 70px;
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgb(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 100;
}

.wrapper {
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1000;
}

/*-------------------------------------------*\
    Icons
\*-------------------------------------------*/

.navbar-item {
    width: 45px;
    height: 45px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    background: none;
    background: white;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.navbar-item:hover {
    cursor: pointer;
}

/*-------------------------------------------*\
    Utilities
\*-------------------------------------------*/

.label {
    font-weight: bold;
    color: white;
    text-align: center;
    padding-right: 10px;
}

/*-------------------------------------------*\
    CSS Normalisation 
\*-------------------------------------------*/

button {
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    outline: inherit;
}
</style>

<script>
export default {
    name: 'Navbar',
    data: function() {
        return {
            windows: this.$store.getters.getWindows,
        }
    },
    methods: {
        openWindow(windowId) {
            const payload = {
                'windowState': 'open',
                'windowID': windowId
            }
            this.$store.commit('setWindowState', payload)
        },      
    }
}
</script>
