<template>
    <tab title="Party Platter" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: "Chef's choice only",
        items: [
            {
                name: "Party 1",
                price: "45",
                description: "7 regular rolls and 1 Dragon roll"
            },
            {
                name: "Party 2",
                price: "65",
                description: "2 regulars, 1 mango roll, 20 pcs. of assorted sushi & sashimi"
            },
            {
                name: "Party 3",
                price: "95",
                description: "3 regular rolls, 1 rainbow, 1 super dragon roll and 30 pcs. of assorted sushi & sashimi"
            },
            {
                name: "Hayashi Deluxe",
                price: "150",
                description: "5 regular rolls, 1 valentine roll, 1 Ebi Ebi roll, 50 pcs. of assorted sushi & sashimi"
            }
        ]
    }
]
</script>

<style scoped>

</style>