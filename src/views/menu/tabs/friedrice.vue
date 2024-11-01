<template>
    <tab title="Japanese Fried Rice" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: '',
        items: [
            {
                name: 'Choice of Chicken, Beef or Pork',
                price: 12
            },
            {
                name: 'Shrimp',
                price: 13
            },
            {
                name: 'Seafood',
                price: 15
            },
            {
                name: 'Pineapple Fried Rice',
                price: 18,
                description: 'Diced fresh pineapple, scallop, shrimp, crabstick & chicken'
            }
        ]
    }
]
</script>

<style scoped>

</style>