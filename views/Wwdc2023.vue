<script setup>
const getImagePath = (img) => {
    const path = `../assets/Wwdc/${img}`;
    const modules =
        import.meta.glob("../assets/Wwdc/*", {
            eager: true
        });
    const mod = modules[path]
    return mod.default;
};
</script>

<template>
<div>
    <img src="@/assets/Wwdc/wwdc_2023.jpg" alt="WWDC 2023" class="hero" />
    <div class="inner-content">
        <h3 class="heading"><b>Apple WWDC 2022</b></h3>
        <p class="paragraph">
            This isn't a story about how I won the Apple WWDC Swift Student Challenge in 2022. This will just be a photo dump of my experience attending Apple WWDC 2023. Enjoy!
        </p>
    </div>
    <div v-for="i in 15" :key="i">
        <img :src="getImagePath(`2023_${i}.jpeg`)" class="images-full mb-8" />
    </div>
</div>
</template>

<style scoped>
.hero {
    width: 100%;
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 1px solid rgb(0, 0, 0, 0.1);
}

.images {
    width: 100%;
    height: 350px;
    /* object-fit: cover; */
}

.images-full {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.subtitle {
    font-size: 12px;
    color: gray;
    text-align: center;
}

.heading {
    padding-bottom: 5px;
}

.inner-content {
    padding-top: 30px;
    padding-bottom: 30px;
}

h6,
h3 {
    margin: 0;
    padding: 0;
}

h6 {
    margin-bottom: 15px !important;
}
</style>
