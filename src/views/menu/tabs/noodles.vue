<template>
    <tab title="Japanese Noodles" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: 'Udon/Soba (Noodle Soup)',
        items: [
            {
                name: 'Vegetable or Chicken',
                price: '12/13'
            },
            {
                name: 'Beef or Shrimp',
                price: '15'
            },
            {
                name: 'Nabe Yaki',
                price: '18',
                description: 'Noodle soup w. egg, chicken, crabmeat, vegetable & two shrimp tempuras'
            },
            {
                name: 'Seafood',
                price: '18'
            }
        ]
    },
    {
        title: "Yaki Udon/Soba (Stir Fried Noodles)",
        items: [
            {
                name: 'Vegetable or Chicken',
                price: '12/13'
            },
            {
                name: 'Beef or Shrimp',
                price: '15'
            },
            {
                name: 'Seafood',
                price: '18',
            }
        ]
    },
    {
        title: "Ramen",
        items: [
            {
                name: "Roast Pork",
                price: '15'
            },
            {
                name: "Chicken or Shrimp",
                price: '15/17',
                description: 'Noodle soup w. mix vegetables, egg, crabmeat'
            }
        ]
    }
]
</script>

<style scoped>

</style>