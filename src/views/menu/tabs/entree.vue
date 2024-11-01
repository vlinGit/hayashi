<template>
    <tab title="Sushi Bar Entrees" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: 'Served w. soup or salad',
        items: [
            {
                name: 'Maki Combo',
                price: 15,
                description: 'Choice of 3 regular rolls'
            },
            {
                name: 'Sushi Regular',
                price: 20,
                description: '8 pcs. sushi & 1 California roll'
            },
            {
                name: 'Sushi Deluxe',
                price: 25,
                description: '10 pcs. sushi & 1 eel avocado roll'
            },
            {
                name: 'Chirashi',
                price: 25,
                description: '12 pcs. mixed of raw fish over sushi rice'
            },
            {
                name: 'Salmon Lover',
                price: 25,
                description: '4 pcs. sushi, 6 pcs. sashimi & 1 salmon roll'
            },
            {
                name: 'Sushi Torio',
                price: 25,
                description: '3 pcs. of each tuna, salmon, yellowtail & 1 tuna roll'
            },
            {
                name: 'Tekka Don',
                price: 25,
                description: '10 pcs. tuna sashimi over sushi rice'
            },
            {
                name: 'Sake Don',
                price: 25,
                description: '10 pcs. salmon sashimi over sushi rice'
            },
            {
                name: 'Tri Color Don',
                price: 25,
                description: '4 pcs. tuna, 4 pcs. salmon, 4 pcs. yellowtail over sushi rice'
            },
            {
                name: 'Eel Lover',
                price: 28,
                description: '4 pcs. sushi, 6 pcs. sashimi & 1 eel avocado roll'
            },
            {
                name: 'Sashimi Regular',
                price: 28,
                description: '16 pcs. of assorted raw fish'
            },
            {
                name: 'Sushi & Sashimi Combo',
                price: 28,
                description: '4 pcs. sushi, 9 pcs. sashimi & 1 eel avocado roll'
            },
            {
                name: 'Sashimi Deluxe',
                price: 30,
                description: '18 pcs. of assorted raw fish'
            }
        ]
    }
]
</script>

<style scoped>

</style>