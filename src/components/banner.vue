<template>
    <div class="banner">
        <div class="text">
            <h1>{{ title }}</h1>
            <p v-if="subtitle">{{ subtitle }}</p>
        </div>
        <div class="backgroundImage"></div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: false
    },
    imagePath: {
        type: String,
        required: true
    }
});
const bgImage = `url(${props.imagePath})`;
</script>

<style scoped>
.banner {
    color: white;
    text-align: center;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text{
        position: absolute;

        h1, p{
            margin: 0;
        }

        h1{
            font-size: 16em;
            font-family: "Night in Tokyo";
            line-height: 90%;
        }

        p{
            font-size: 4em;
        }
    }

    .backgroundImage{
        background-image: v-bind(bgImage);
        filter: blur(4px);
        -webkit-filter: blur(4px);
        transform: scale(1.03);
        height: 100vh;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        margin: -5px;
        overflow: hidden;
    }
}
</style>