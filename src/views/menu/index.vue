<template>
    <banner title="Menu" subtitle="Taste the East" imagePath="src/assets/menuBanner.png"/>
    <div class="content">
        <Carousel class="carouselMenu" :value="menus" :numVisible="7" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="menu-item" @click="setMenu(slotProps.data.id)">
                    <p>{{ slotProps.data.name }}</p>
                </div>
            </template>
        </Carousel>
        <transition name="slide-fade" mode="out-in" style="color: black">
            <appetizers v-if="currentMenu == 0"/>
            <alacarte v-else-if="currentMenu == 1"/>
            <asianFusion v-else-if="currentMenu == 2"/>
            <entree v-else-if="currentMenu == 3"/>
            <friedrice v-else-if="currentMenu == 4"/>
        </transition>
    </div>
</template>

<script setup>
import banner from '@/components/banner.vue';
import Carousel from 'primevue/carousel';
import { ref } from 'vue';
import appetizers from '@/views/menu/tabs/appetizers.vue';
import alacarte from '@/views/menu/tabs/alacarte.vue';
import asianFusion from '@/views/menu/tabs/asianFusion.vue';
import entree from '@/views/menu/tabs/entree.vue';
import friedrice from '@/views/menu/tabs/friedrice.vue';

const currentMenu = ref(0);

const menus = ref([
    {
        id: 0,
        name: 'Menu Item 0'
    },
    {
        id: 1,
        name: 'Menu Item 1'
    },
    {
        id: 2,
        name: 'Menu Item 2'
    },
    {
        id: 3,
        name: 'Menu Item 3'
    },
    {
        id: 4,
        name: 'Menu Item 4'
    },
    {
        id: 5,
        name: 'Menu Item 5'
    },
    {
        id: 6,
        name: 'Menu Item 6'
    },
    {
        id: 7,
        name: 'Menu Item 7'
    },
    {
        id: 8,
        name: 'Menu Item 8'
    },
    {
        id: 9,
        name: 'Menu Item 9'
    },
    {
        id: 10,
        name: 'Menu Item 10'
    },
]);

const responsiveOptions = ref([
    {
        breakpoint: '1330px',
        numVisible: 5,
        numScroll: 1
    },
    {
        breakpoint: '990px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '812px',
        numVisible: 3,
        numScroll: 1
    }
]);

const setMenu = (id) => {
    console.log(id)
    currentMenu.value = id;
}
</script>

<style scoped>
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    padding: 50px;
}

.carouselMenu{
    display: flex;
    justify-content: center;
    background-color: #123461;
    border-radius: 10px;
    height: 50px;
    width: 90%;
}

.menu-item{
    background-color: #F5F3EC;
    color: #123461;
    width: 150px;
    height: 30px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    border-radius: 10px;
    transition: all 0.15s ease-in-out;

    p{
        margin: 0;
    }
}

.menu-item:hover{
    cursor: pointer;
    user-select: none;
    background-color: #FFFFFF;
    transform: scale(1.03);
}

@media (max-width: 712px){
    .menu-item{
        width: 90%;
    }
}
</style>