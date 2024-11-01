<template>
    <tab title="Tempura" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: 'Served with miso soup or salad and rice',
        items: [
            {
                name: 'Vegetable Tempura',
                price: 15
            },
            {
                name: 'Katsu',
                price: '18/20',
                description: 'Chicken, pork or fish'
            },
            {
                name: 'Chicken Tempura',
                price: 20
            },
            {
                name: 'Shrimp Tempura',
                price: 22
            },
            {
                name: 'Seafood Tempura',
                price: 28,
                description: 'Shrimp, crabstick, scallop, white fish & vegetable'
            }
        ]
    }
]
</script>

<style scoped>

</style>