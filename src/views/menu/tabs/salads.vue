<template>
    <tab title="Salads" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: '',
        items: [
            {
                name: 'Green Salad',
                price: 5
            },
            {
                name: 'Salmon Skin Salad',
                price: 7,
                description: 'Broiled Salmon skin w. seaweed salad & cucumber'
            },
            {
                name: 'Avocado Salad',
                price: 8
            },
            {
                name: 'Seaweed Salad',
                price: 8
            },
            {
                name: 'Kani Salad',
                price: 8
            },
            {
                name: 'Apple Kani Salad',
                price: 9
            },
            {
                name: 'Mango Kani Salad',
                price: 9
            },
            {
                name: 'Seafood Salad',
                price: 12,
                description: 'Shrimp, salmon, octopus, white fish & crabmeat'
            },
            {
                name: 'Spicy Tuna or Salmon Salad',
                price: 12
            },
            {
                name: 'Lobster Salad',
                price: 12
            },
            {
                name: 'Seared Tuna Salad',
                price: 12
            }
        ]
    },
    {
        title: '',
        items: [
            {
                name: 'Ocean Salad',
                price: 13,
                description: 'White fish, kani, salmon, tako shrimp masago, cucumber & seaweed salad mix w. white dressing'
            },
            {
                name: 'Crispy Calamari Salad',
                price: 15,
                description: 'Fried calamari mixed green with creamy dressing'
            },
            {
                name: 'Tuna Seaweed Crunch Salad',
                price: 13,
                description: 'Seared tuna, seaweed salad, mixed greens & crunch w. white dressing'
            },
            {
                name: 'Spicy Seafood Salad',
                price: 15,
                description: 'Tuna, salmon, asparagus, kani, shrimp, avocado, w. black rice & spicy sauce'
            },
            {
                name: 'Hayashi Salad',
                price: 15,
                description: 'Broiled salmon skin, kani, seaweed and spicy tuna salads on a bed of avocado & caviar'
            },
            {
                name: 'Seafood Ceviche Salad',
                price: 15,
                description: 'Yellowtail, salmon, white fish, kani, red clam, avocado and spring mix w. yuzu olive sauce'
            },
            {
                name: 'Duck Salad',
                price: 15,
                description: 'Grill duck, spring mix pineapple with sweet chili sauce'
            },
            {
                name: 'King Crab Salad',
                price: 'SP',
                description: 'Alaskan king crab, half avocado, caviar with spicy sauce'
            }
        ]
    }
]
</script>

<style scoped>

</style>