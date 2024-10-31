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
            <specialrolls v-if="currentMenu == 0"/>
            <regularrolls v-else-if="currentMenu == 1"/>
            <alacarte v-else-if="currentMenu == 2"/>
            <lunch v-else-if="currentMenu == 3"/>
            <entree v-else-if="currentMenu == 4"/>
            <appetizers v-else-if="currentMenu == 5"/>
            <bentobox v-else-if="currentMenu == 6"/>
            <asianfusion v-else-if="currentMenu == 7"/>
            <teriyaki v-else-if="currentMenu == 8"/>
            <hibachi v-else-if="currentMenu == 9"/>
            <tempura v-else-if="currentMenu == 10"/>
            <donburi v-else-if="currentMenu == 11"/>
            <padthainoodles v-else-if="currentMenu == 12"/>
            <friedrice v-else-if="currentMenu == 13"/>
            <noodles v-else-if="currentMenu == 14"/>
            <partyplatter v-else-if="currentMenu == 15"/>
            <soup v-else-if="currentMenu == 16"/>
            <salads v-else-if="currentMenu == 17"/>
            <dessert v-else-if="currentMenu == 18"/>
            <drink v-else-if="currentMenu == 19"/>
        </transition>
    </div>
</template>

<script setup>
import banner from '@/components/banner.vue';
import Carousel from 'primevue/carousel';
import { ref } from 'vue';
import appetizers from '@/views/menu/tabs/appetizers.vue';
import alacarte from '@/views/menu/tabs/alacarte.vue';
import asianfusion from '@/views/menu/tabs/asianFusion.vue';
import entree from '@/views/menu/tabs/entree.vue';
import soup from '@/views/menu/tabs/soup.vue';
import specialrolls from '@/views/menu/tabs/specialrolls.vue';
import regularrolls from '@/views/menu/tabs/regularrolls.vue';
import bentobox from '@/views/menu/tabs/bentobox.vue';
import teriyaki from '@/views/menu/tabs/teriyaki.vue';
import hibachi from '@/views/menu/tabs/hibachi.vue';
import tempura from '@/views/menu/tabs/tempura.vue';
import donburi from '@/views/menu/tabs/donburi.vue';
import padthainoodles from '@/views/menu/tabs/padthainoodles.vue';
import friedrice from '@/views/menu/tabs/friedrice.vue';
import noodles from '@/views/menu/tabs/noodles.vue';
import partyplatter from '@/views/menu/tabs/partyplatter.vue';
import salads from '@/views/menu/tabs/salads.vue';
import dessert from '@/views/menu/tabs/dessert.vue';
import drink from '@/views/menu/tabs/drink.vue';
import lunch from '@/views/menu/tabs/lunch.vue';

const currentMenu = ref(0);

const menus = ref([
    {
        id: 0,
        name: 'Special Rolls'
    },
    {
        id: 1,
        name: 'Regular Rolls/Hand Rolls'
    },
    {
        id: 2,
        name: 'A La Carte'
    },
    {
        id: 3,
        name: 'Hayashi Lunch'
    },
    {
        id: 4,
        name: 'Sushi Bar Entrees'
    },
    {
        id: 5,
        name: 'Appetizers'
    },
    {
        id: 6,
        name: 'Dinner Bento Box'
    },
    {
        id: 7,
        name: 'Asian Fusion Kitchen'
    },
    {
        id: 8,
        name: 'Teriyaki'
    },
    {
        id: 9,
        name: 'Hibachi'
    },
    {
        id: 10,
        name: 'Tempura'
    },
    {
        id: 11,
        name: 'Don Buri'
    },
    {
        id: 12,
        name: 'Pad Thai Noodles'
    },
    {
        id: 13,
        name: 'Japanese Fried Rice'
    },
    {
        id: 14,
        name: 'Japanese Noodles'
    },
    {
        id: 15,
        name: 'Party Platter'
    },
    {
        id: 16,
        name: 'Soup'
    },
    {
        id: 17,
        name: 'Salads'
    },
    {
        id: 18,
        name: 'Dessert'
    },
    {
        id: 19,
        name: 'Drink'
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
    height: 7em;
    width: 90%;
}

.menu-item{
    background-color: #F5F3EC;
    color: #123461;
    width: 150px;
    height: 3.5em;
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

@media (max-width: 1000px){
    .content{
        padding-left: 10px;
        padding-right: 10px;
    }

    .carouselMenu{
        width: 100%;
    }

    .carouselMenu{
        height: 100px;
    }

    .menu-item{
        width: 90%;
        font-size: 16px;
    }
}
</style>