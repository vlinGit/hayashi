<template>
    <tab title="A La Carte" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: 'Special Price $2.50',
        items: [
            { name: 'Salmon', description: 'Sake' },
            { name: 'Fluke', description: 'Hirame' },
            { name: 'Shrimp', description: 'Ebi' },
            { name: 'Mackerel', description: 'Saba' },
            { name: 'Sea Bass', description: 'Suzuki' },
            { name: 'Crab Stick', description: 'Kani' },
            { name: 'Egg', description: 'Tamago' },
            { name: 'Inari', description: 'Tofu Skin' },
            { name: 'Red Snapper', description: '' },
            { name: 'White Tuna', description: '' },
            { name: 'Yellowtail', description: 'Harmachi' },
            { name: 'Squid', description: 'Ika' },
            { name: 'Hokki Gai', description: 'Surf Clam' },
            { name: 'Tuna', description: 'Maguro' },
            { name: 'Octopus', description: 'Tako' },
            { name: 'Smoked Salmon', description: '' }
        ]
    },
    {
        title: 'Non-Special Price',
        items: [
            { name: 'Eel', description: 'unagi', price: '3' },
            { name: 'Flying Fish Roe', description: 'Masago', price: '4' },
            { name: 'Spicy Salmon', price: '4' },
            { name: 'Spicy Tuna', price: '4' },
            { name: 'Black Tobiko', price: '4' },
            { name: 'Wasabi Tobiko', price: '4' },
            { name: 'Sweet Shrimp', description: 'Amaebi', price:'3' },
            { name: 'Black Pepper Tuna', price: '3' },
            { name: 'Spicy White Tuna', price: '4' },
            { name: 'Spicy Shrimp', price: '4' },
            { name: 'Salmon Roe', description: 'Ikura', price: '6' },
            { name: 'Lobster', price: '5' },
            { name: 'Fresh Scallop', price: '6' },
            { name: 'King Salmon', price: 'SP' },
            { name: 'Fatty Yellowtail', price: 'SP' },
            { name: 'Jumbo Amaebi', price: '7' },
            { name: 'King Crab', price: 'SP' },
            { name: 'Sea Urchin', description: 'Uni', price: 'SP' },
            { name: 'Spicy Scallop', price: '7' },
            { name: 'Fatty Tuna', description: 'Toro', price: 'SP' },
            { name: 'Fresh Oyster', description: 'Kumamoto', price: 'SP' }
        ]
    }
]
</script>

<style scoped>

</style>