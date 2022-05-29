<template>
<div>
    <h2>Open Source Projects</h2>

    <div class="inner-content">
        <h3 class="heading"><a href="https://github.com/DonChiaQE/vuejs-os-template">OS Template for Vue.JS</a></h3>
        <p class="paragraph">An open source WIP template made and designed for Vue 2.</p>
        <p class="paragraph">Technologies used:</p>
        <ul>
            <li class="paragraph">- Vue 2</li>
            <li class="paragraph">- Vuex</li>
            <li class="paragraph">- InteractJS</li>
            <li class="paragraph">- MomentJS</li>
        </ul>
        <p class="paragraph">Built with encapsulation of each window frame in mind, this enables users to easily reuse the base template of a basic window and fill it up with their own content.</p>
        <p class="paragraph">The template was built with ease of use in mind as well as themeing. Included in the template are three separate themes, the basic Blueprint theme, a Windows theme and a MacOS theme.</p>
        <p class="paragraph">Users are able to quickly switch between their preferred theme by changing a few lines of code. Resusability is encouraged through the means of slots and template components.</p>

    </div>

    <div class="inner-content">
        <a href="https://main-preview-site.netlify.app/" target="_blank">
            <img src="@/assets/open-source/main.png" alt="screenshot of main preview template" />
            <h4 class="subtitle">Main Preview Page</h4>
        </a>
    </div>

    <div class="inner-content">
        <a href="https://windows-template.netlify.app/" target="_blank">
            <img src="@/assets/open-source/win95.png" alt="screenshot of windows 95 template" />
            <h4 class="subtitle">Windows 95 Theme</h4>
        </a>
    </div>

    <div class="inner-content">
        <a href="https://macos-template.netlify.app/" target="_blank">
            <img src="@/assets/open-source/macos.png" alt="screenshot of MacOS template" />
            <h4 class="subtitle">MacOS Theme</h4>
        </a>
    </div>

    <div class="inner-content">
        <a href="https://blueprint-template.netlify.app/" target="_blank">
            <img src="@/assets/open-source/blueprint.png" alt="screenshot of blueprint template" />
            <h4 class="subtitle">Blueprint Theme</h4>
        </a>
    </div>
</div>
</template>

<style scoped>
.self {
    width: 100%;
    height: auto;
    /* border-radius: 5px; */
}

.subtitle {
    font-size: 12px;
    color: gray;
}

.heading {
    padding-bottom: 20px;
}

.header {
    padding-top: 20px;
    padding-bottom: 20px;
}

.inner-content {
    padding-top: 30px;
}

h2,
h4,
h3 {
    padding: 0;
    margin: 0;
}

img {
    width: 100%;
    height: auto;
}

a, .subtitle {
    color: #FF5733 !important;
}
</style>
