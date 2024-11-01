<template>
    <tab title="Dinner Bento Box $23" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: 'Sides',
        items: [
            { name: 'Green Salad' },
            { name: 'Shumai' },
            { name: 'Miso Soup' },
            { name: 'Rice' },
            { name: 'California Roll' },
            { name: 'Shrimp Vegetable Tempura' },
        ]
    },
    {
        title: 'Main (Choose one)',
        items: [
            {name: "Chicken, shrimp, salmon, tofu, or steak teriyaki"},
            {name: "Chicken, pork, or fish katsu"},
            {name: "Beef or chicken negimaki"},
            {name: "Sushi or sashimi"},
            {name: "Unagi don"},
            {name: "Red curry chicken or shrimp (spicy)"}
        ]
    }
]
</script>

<style scoped>

</style>