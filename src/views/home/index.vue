<template>
    <banner title="Hayashi" subtitle="Japanese Fusion" :imagePath="homeBanner"/>
    <div class="container">
        <div class="contents">
            <div id="sushiPlate" :style="{ backgroundImage: `url(${sushiPlate})` }"></div>
            <div id="cardInfo">
                <div id="text">
                    <h2>Our Offerings</h2>
                    <p>Experience the savory taste of Japanese cuisine with an artful twist. Our menu, a collection of carefully crafted sushi rolls, soothing soups, and mouth watering dishes, provides an unrivaled dining experience.</p>
                    <p>Every meal invites you to experience the flavors of the east, whether you’re savoring a quiet lunch or celebrating a special evening the menu at Hayashi will surely be able to cater to you.</p>
                </div>
            </div>
        </div>
        <div class="contents">
            <div id="cardInfo">
                <div id="text">
                    <h2>Reservations</h2>
                    <p>Have a special event coming up? A big gathering of sorts? We'd be happy to host.</p>
                    <p>Our cozy setting, large menu, and attentive staff will create the perfect backdrop for any occasion. Just give us a call and we can setup a spot just for you.</p>
                </div>
            </div>
            <div id="closeuptuna" :style="{ backgroundImage: `url(${closeuptuna})` }"></div>
        </div>
    </div>
</template>

<script setup>
import banner from '@/components/banner.vue'
import homeBanner from '@/assets/homeBanner.png'
import sushiPlate from '@/assets/platesOfSushi.png'
import closeuptuna from '@/assets/closeuptuna.png'
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    color: #123461;
    padding: 6.25em;
    gap: 2em;
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
    background-size: cover;
    background-position: center;
}

#closeuptuna{
    width: 40%;
    background-size: cover;
    background-position: center;
}

#cardInfo{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
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

    #closeuptuna{
        display: none;
    }
    
    #cardInfo{
        width: 100%;
    }
}
</style>