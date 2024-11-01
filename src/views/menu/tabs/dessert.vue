<template>
    <tab title="Dessert" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: '',
        items: [
            {
                name: 'Ice Cream',
                price: 5,
                description: 'Green Tea, Red Bean, Vanilla or Chocolate'
            },
            {
                name: 'Fried Banana',
                price: 6,
            },
            {
                name: 'Mochi Ice Cream',
                price: 5,
                description: 'Vanilla, Green Tea, Mango, Strawberry, Red Bean, Chocolate'
            },
            {
                name: 'Fried Ice Cream',
                price: 7,
                description: 'Green Tea, Red Bean, Vanilla or Chocolate'
            },
            {
                name: 'Fried Cheese Cake',
                price: 6,
            },
            {
                name: 'Mango Sorbet in Natural Shell',
                price: 6,
            },
            {
                name: 'Tiramisu Green Tea',
                price: 8,
            },
            {
                name: 'Kyoto Sunae',
                price: 9,
                description: 'Banana tempura w. choice of Mochi Ice Cream topped w. whipped cream, chocolate syrup & cherry'
            },
            {
                name: 'Green Tea Cheesecake',
                price: 7,
            }
        ]
    }
]
</script>

<style scoped>

</style>