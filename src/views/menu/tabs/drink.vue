<template>
    <tab title="Drink" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: '',
        items: [
            {
                name: 'Soda',
                price: 1.5,
                description: 'Coke, Sprite, Ginger Ale, Club Soda, Diet Coke'
            },
            {
                name: 'Spring Water',
                price: 1.5
            },
            {
                name: 'Ramune (Japanese Soda)',
                description: 'Strawberry, original',
                price: 4
            },
            {
                name: 'Snapple',
                price: 3.5,
                description: 'Peach, Lemon'
            },
            {
                name: 'Juice',
                price: 3,
                description: 'Orange, Apple, Cranberry'
            },
            {
                name: 'Perrier',
                price: 3
            },
            {
                name: 'Thai Ice Tea',
                price: 5
            },
            {
                name: 'Thai Ice Coffee',
                price: 5
            }
        ]
    }
]
</script>

<style scoped>

</style>