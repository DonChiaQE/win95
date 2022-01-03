<template>
    <div class="top-navbar-container">
        <div class="top-nav-left">
            <div class="top-nav-icon"></div>
            <div class="top-nav-text bold">
                {{
                    this.$store.getters.getActiveWindow=='nil' ?
                    'Finder' :
                    this.$store.getters.getWindowById(this.$store.getters.getActiveWindow).displayName
                }}
            </div>
            <div class="top-nav-text hidden-small">File</div>
            <div class="top-nav-text hidden-small">Edit</div>
            <div class="top-nav-text hidden-small">View</div>
            <div class="top-nav-text hidden-small">Go</div>
            <div class="top-nav-text hidden-small">Window</div>
            <div class="top-nav-text hidden-small">Help</div>
        </div>
        <div class="top-nav-right">
            <div class="date text-right">
                <time>{{this.date}}</time>
            </div>
            <div class="time text-right">
                <!-- 11:22PM -->
                <time>{{this.time}}</time>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
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
    }
}
</script>

<style scoped>
.top-navbar-container {
    width: 100%;
    height: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: rgba(255, 255, 255, .5);
    backdrop-filter: blur(25px);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.top-nav-left {
    display: flex;
    width: auto;
    margin-left: 15px;
    align-items: center;
}

.top-nav-icon {
    margin-right: 5px;
    margin-left: 5px;
}

.top-nav-text {
    font-size: 14px;
    font-weight: 500;
    margin-left: 10px;
    margin-right: 10px;
}

.top-nav-right {
    display: flex;
    width: auto;
    justify-content: space-evenly;
    margin-right: 12px;
}

.text-right {
    font-size: 14px;
    font-weight: 500;
    margin-left: 7px;
    margin-right: 7px;
}

.bold {
    font-weight: 700;
}

@media only screen and (max-width: 700px) {
    .hidden-small {
        display: none;
    }
    .top-nav-left {
        width: 150px;
        margin-left: 5px;
    }
    .top-nav-right {
        margin-right: 5px;
    }
    .text-right {
        margin-right: 5px;
        margin-left: 5px;
    }
    .top-nav-text {
        margin-right: 5px;
        margin-left: 5px;
    }
}
</style>