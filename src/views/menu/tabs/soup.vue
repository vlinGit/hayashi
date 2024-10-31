<template>
    <tab title="Soup" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: '',
        items: [
            {
                name: 'Miso',
                description: '',
                price: '2'
            },
            {
                name: 'Clear Soup',
                description: '',
                price: '3'
            },
            {
                name: 'Mixed Vegetable Soup',
                description: '',
                price: '6'
            },
            {
                name: 'Clam Soup',
                description: '',
                price: '5'
            },
            {
                name: 'Shumai Soup',
                description: '',
                price: '8'
            },
            {
                name: 'Creamy Clam Chowder Soup',
                description: '',
                price: '9'
            },
            {
                name: 'Seafood Soup',
                description: '',
                price: '10'
            },
            {
                name: 'Tom Yum Soup (spicy) (Seafood)',
                description: 'Thai style hot & sour soup w. basil',
                price: '11'
            }
        ]
    }
]
</script>

<style scoped>

</style>