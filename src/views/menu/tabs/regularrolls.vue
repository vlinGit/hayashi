<template>
    <tab title="Regular Roll or Hand Roll" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: 'Special Price $4.00',
        items: [
            { name: 'Inari Maki' },
            { name: 'Yasai Maki' },
            { name: 'Salmon Roll' },
            { name: 'Kanpyo Roll' },
            { name: 'Oshinko Maki' },
            { name: 'Asparagus Roll' },
            { name: 'Cucumber Maki' },
            { name: 'Sweet Potato Roll' },
            { name: 'Avocado Maki' },
            { name: 'California Roll' },
            { name: 'White Tuna Roll' },
            { name: 'Veg. Tempura Roll' },
            { name: 'Peanut Avocado Roll' },
            { name: 'Mango Avocado Roll' },
            { name: 'Tomato Avocado Roll' },
            { name: 'Shiitake Mushroom Roll' }
        ]
    },
    {
        title: 'Non-Special Price',
        items: [
            { name: 'Extra $1 for Lunch Special Roll' },
            { name: 'Tuna Roll', price: 4.5 },
            { name: 'East Roll', price: 4.5 },
            { name: 'Futo Maki', price: 5 },
            { name: 'Tako Maki', price: 4.5 },
            { name: 'Ginza Roll', price: 4.5 },
            { name: 'Boston Roll', price: 4.5 },
            { name: 'Alaskan Roll', price: 4.5 },
            { name: 'Yellowtail roll', price: 4.5 },
            { name: 'Spicy Kani Roll', price: 4.5 },
            { name: 'Spicy Tuna Roll', price: 4.5 },
            { name: 'Tuna Avocado Roll', price: 4.5 },
            { name: 'Salmon Avocado Roll', price: 4.5 },
            { name: 'Philadelphia Roll', price: 4.5 },
            { name: 'Spicy Salmon Roll', price: 4.5 },
            { name: 'Spicy Yellowtail Roll', price: 4.5 },
            { name: 'Spicy White Tuna Roll', price: 4.5 },
            { name: 'Masago Maki', price: 4.5 },
            { name: 'AAC Roll', price: 4.5 },
            { name: 'Salmon Skin Roll', price: 4.5 },
            { name: 'Shrimp or Chicken Tempura Roll', price: 5 },
            { name: 'Eel Avocado Roll', price: 5 },
            { name: 'Eel Cucumber Roll', price: 5 },
            { name: 'Spicy Shrimp Roll', price: 6 },
            { name: 'Spicy Cooked Scallop Roll', price: 6 }
        ]
    }
]
</script>

<style scoped>

</style>