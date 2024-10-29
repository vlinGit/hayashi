<template>
    <div class="banner">
        <h1>{{ title }}</h1>
        <p v-if="subtitle">{{ subtitle }}</p>
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
    background-image: v-bind(bgImage);
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1, p{
        margin: 0;
    }

    h1{
        font-size: 16em;
    }

    p{
        font-size: 4em;
    }
}
</style>