<template>
    <tab title="Asian Fusion Kitchen" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: 'Served with miso soup or salad and rice',
        items: [
            {
                name: 'Mango Chicken or Shrimp',
                price: '23/25',
                description: 'Sauteed w. fresh mangoes & pepper in Thai sweet sauce'
            },
            {
                name: 'Black Pepper Chicken/Beef',
                price: '21/23'
            },
            {
                name: 'Jumbo Crispy Shrimp',
                price: '22'
            },
            {
                name: 'Roast Beef',
                description: 'Grilled beef w. stir fired mixed veg. w. special sauce',
                price: '23'
            },
            {
                name: 'Grilled Duck',
                price: '25'
            },
            {
                name: 'Zesty Fish',
                price: '23',
                description: 'Fried fish fillet w. garlic & sweet chili sauce',
                spicy: true
            },
            {
                name: 'Red Curry Chicken/Shrimp/Seafood (spicy)',
                price: '22/25/28',
                description: 'Eggplant, zucchini, pepper, asparagus, onion & basil',
                spicy: true
            },
            {
                name: 'Pattaya Salmon',
                price: '25',
                description: 'Grilled salmon with mix vegetables in curry sauce'
            },
            {
                name: 'Chilian Sea Bass',
                price: '26',
                description: 'Grilled filelt sea bass w. asparagus in special sauce'
            }
        ]
    }
]
</script>

<style scoped>

</style>