<template>
<div class="grid">
    <div class="square" v-for="i in 43" v-bind:key="i">
        <img data-fancybox="gallery" :src="require(`@/assets/PhotosWebp/image-${i}.webp`)" :href="require(`@/assets/PhotosWebpExpanded/image-${i}.webp`)" />
    </div>
</div>
</template>

<style scoped>
.grid {
    column-count: 2;
    column-gap: 0.5em;
    margin-top: auto;
    margin-bottom: auto;
    padding: 20px;
}

img {
    background-color: #eee;
    display: inline-block;
    margin: 0 0 0.5em;
    width: 100%;
}

img:hover {
    cursor: pointer;
    box-shadow: black 0 0 3px;
}
</style>
