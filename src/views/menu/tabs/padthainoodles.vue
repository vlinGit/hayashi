<template>
    <tab title="Pad Thai Noodles" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: '',
        items: [
            {
                name: 'Chicken / Beef / Seafood / Duck',
                description: 'Famous Thai stir fried noodles w. egg, mixed vegetables, scallion & ground peanut',
                price: '14/16/18/18'
            }
        ]
    }
]
</script>

<style scoped>

</style>