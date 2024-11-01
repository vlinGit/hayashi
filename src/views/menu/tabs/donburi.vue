<template>
    <tab title="Don Buri" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: 'Served w. soup',
        items: [
            {
                name: 'Oyako Don',
                price: 18,
                description: 'Cooked chicken, egg & onion over rice'
            },
            {
                name: 'Unagi Don',
                price: 26,
                description: 'Broiled eel topped w. special sauce over rice'
            },
            {
                name: 'Katsu Don',
                price: 18,
                description: 'Pork cutlet cooked w. egg & vegetable over rice'
            }
        ]
    }
]
</script>

<style scoped>

</style>