<template>
<div class="flexbox-column">
    <nav class="download-bar">
        <a href="https://github.com/DonChiaQE/vuejs-os-template" class="download" style="z-index: 10;" download target="_blank">
            <span style="display: flex;" class="border">
                <img src="@/assets/download.png" class="icon-image" />
                <p style="margin-top: 2px;">Build your own WebOS with my template!</p>
            </span>
        </a>
    </nav>
    <iframe class="frame" id="website" src="https://main-preview-site.netlify.app/" />
</div>
</template>

<style scoped>
.flexbox-column {
    display: flex; 
    flex-direction: column; 
    height: 100%;
    overflow: hidden;
}

.download {
    vertical-align: middle;
    box-shadow: 1.5px 1.5px black;
    border-top: solid rgb(250, 250, 250) 1.5px;
    border-left: solid rgb(250, 250, 250) 1.5px;
    border-bottom: solid rgb(90, 90, 90) 1.5px;
    border-right: solid rgb(90, 90, 90) 1.5px;
    background: rgb(192, 192, 192);
    padding: 2px;
    margin-right: 5px;
}

.download:active {
    box-shadow: none;
    background: repeating-conic-gradient(rgb(189, 190, 189) 0% 25%, rgb(255, 255, 255) 0% 50%) 
              50% / 2px 2px;
    border-top: solid rgb(0, 0, 0) 1.5px;
    border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
}

.download-bar {
    border: 1px white solid;
    outline: 1px rgb(123, 125, 123) solid;
    font-size: 12px;
    padding: 4px 4px 4px 4px;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.icon-image {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    margin-top: 0; 
    margin-bottom: 0;
}

.border {
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    font-family: "MS Sans Serif";
    src: url('~@/assets/fonts/MS-Sans-Serif.ttf');
}

.border:active {
    border: black dotted 1px;
}

.download:hover {
    cursor: pointer;
}

iframe {
    width: 100%;
    margin: 0;
    margin-bottom: -5px;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
.frame {
    width: 100%;
    height: 97.5%;
}
</style>

<script>
export default {
    methods: {
        
    }
}
</script>