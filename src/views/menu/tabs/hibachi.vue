<template>
    <tab title="Hibachi" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: 'Served with miso soup or salad and rice',
        items: [
            { name: 'Vegetable', price: 17 },
            { name: 'Chicken', price: 22 },
            { name: 'Salmon', price: 23 },
            { name: 'Steak', price: 23 },
            { name: 'Shrimp', price: 23 },
            { name: 'Scallop', price: 30 },
            { name: 'Chicken & Salmon', price: 26 },
            { name: 'Chicken & Steak', price: 26 },
            { name: 'Chicken & Shrimp', price: 26 },
            { name: 'Steak & Shrimp', price: 27 },
            { name: 'Shrimp & Scallop', price: 30 },
            { name: 'Fillet Mignon', price: 28 },
            { name: 'Lobster & Steak', price: 38 },
            { name: 'Seafood Combination', price: 38, description: 'Shrimp, scallop & lobster tail' },
        ]
    },
    {
        title: 'Side order',
        items: [
        { name: 'Hibachi Fried Rice', price: 4 },
        { name: 'Hibachi Noodle', price: 7 }
        ]
    }
]
</script>

<style scoped>

</style>