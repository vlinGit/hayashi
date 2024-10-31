<template>
    <banner title="Hayashi" subtitle="Japanese Fusion" imagePath="src/assets/homeBanner.png"/>
    <div class="container">
        <div class="contents">
            <div id="sushiPlate"></div>
            <div id="cardInfo">
                <div id="text">
                    <h2>Our Offerings</h2>
                    <p>Experience the savory taste of Japanese cuisine with an artful twist. Our menu, a collection of carefully crafted sushi rolls, soothing soups, and mouth watering dishes, provides an unrivaled dining experience.</p>
                    <p>Every meal invites you to experience the flavors of the east, whether you’re savoring a quiet lunch or celebrating a special evening the menu at Hayashi will surely be able to cater to you.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import banner from '@/components/banner.vue'
</script>

<style scoped>
.container{
    color: #123461;
    padding: 6.25em;
}

.contents{
    display: flex;
    flex-direction: row;
    gap: 2em;
    justify-content: center;
    align-items: stretch;
}

#sushiPlate{
    width: 40%;
    background-image: url('src/assets/platesOfSushi.png');
    background-size: cover;
    background-position: center;
}

#cardInfo{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: fit-content;
    max-width: 951px;
    max-height: 632px;
    padding: clamp(50px, 6.25em, 100px);
    border: 5px solid #123461;

    #text{
        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    h2,p{
        margin: 0;
    }

    h2{
        font-size: clamp(32px, 4em, 64px);
    }

    p{
        font-size: clamp(16px, 1.5em, 24px);
    }
}

@media (max-width: 600px){
    #sushiPlate{
        display: none;
    }
    
    #cardInfo{
        width: 70%;
    }
}
</style>