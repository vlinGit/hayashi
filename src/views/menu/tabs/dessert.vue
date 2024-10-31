<template>
    <tab title="" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: '',
        items: [
            {
                name: '',
                description: '',
                price: ''
            }
        ]
    }
]
</script>

<style scoped>

</style>