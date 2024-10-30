<template>
    <div class="banner">
        <div class="text">
            <h1>{{ title }}</h1>
            <p v-if="subtitle">{{ subtitle }}</p>
        </div>
        <div class="backgroundImage"></div>
    </div>
    <img class="border" :src="border" />
</template>

<script setup>
import border from '@/assets/borders.svg'

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
    overflow-x: hidden;

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
        height: 100vh;
        width: 100%;
        z-index: -1;
        margin: -5px;
        overflow: hidden;
        position: relative;
    }

    .backgroundImage::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: v-bind(bgImage);
        filter: blur(4px);
        transform: scale(1.03);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
}

.border{
    width: 100%;
    overflow: hidden;
}
</style>