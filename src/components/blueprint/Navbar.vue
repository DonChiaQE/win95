<template>
<nav class="navbar-container">
    <div 
        v-for="window in this.activeWindows" 
        :key="window.key"
    >
        <button 
            v-if="window.windowState=='open'" 
            @click="openWindow(window.windowId)" 
            class="navbar-item open"
        >
        {{window.displayName}}
        </button>
        <button 
            v-if="window.windowState=='minimize'" 
            @click="openWindow(window.windowId)" 
            class="navbar-item minimize"
        >
        {{window.displayName}}
        </button>
        <button 
            v-if="window.windowState=='close'" 
            @click="openWindow(window.windowId)" 
            class="navbar-item close"
        >
        {{window.displayName}}
        </button>
    </div>
    <div class="spacer"></div>
    <p class="label">Active Window: {{$store.getters.getActiveWindow}}</p>
</nav>
</template>

<style scoped>
/*-------------------------------------------*\
    Container
\*-------------------------------------------*/

.navbar-container {
    width: 100%;
    height: 50px;
    background-color: #0073ff;
    z-index: 100;
    display: flex;
    flex-direction: row;
    align-items: center;
}

/*-------------------------------------------*\
    Icons
\*-------------------------------------------*/

.navbar-item {
    color: white;
    display: flex;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
    width: auto;
    height: 50px;
    text-align: center;
}

.navbar-item:hover {
    cursor: pointer;
}

.open {
    background: green;
}

.minimize {
    background: yellow;
}

.close {
    display: none;
}

/*-------------------------------------------*\
    Utilities
\*-------------------------------------------*/

.spacer {
    flex-grow: 1;
}

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
            activeWindows: this.$store.getters.getActiveWindows,
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
