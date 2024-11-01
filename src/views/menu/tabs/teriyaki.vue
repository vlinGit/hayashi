<template>
    <tab title="Teriyaki" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: 'Served with miso soup or salad and rice',
        items: [
            {
                name: 'Tofu, Vegetable or Ginger Pork Teriyaki',
                price: 18
            },
            {
                name: 'Chicken Teriyaki',
                price: 20
            },
            {
                name: 'Beef or Chicken Negiamki',
                description: 'Sliced beef or chicken rolled w. scallion & broiled w. teriyaki sauce',
                price: 20
            },
            {
                name: 'White Fish Teriyaki',
                price: 22
            },
            {
                name: 'Salmon Teriyaki',
                price: 22
            },
            {
                name: 'Steak or Shrimp Teriyaki',
                price: 22
            },
            {
                name: 'Duck Teriyaki',
                price: 23
            },
            {
                name: 'Scallops Teriyaki',
                price: 30
            },
            {
                name: 'Combo Teriyaki (Choice of 2)',
                description: 'Chicken, beef, shrimp or salmon',
                price: 25
            },
            {
                name: 'Seafood Teriyaki',
                description: 'Shrimp, scallop & salmon',
                price: 28
            },
            {
                name: 'Tuna Teriyaki',
                price: 25
            }
        ]
    }
]
</script>

<style scoped>

</style>