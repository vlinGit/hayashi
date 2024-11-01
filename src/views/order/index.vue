<template>
    <banner title="Order" subtitle="" :imagePath="orderBanner"/>
    <div class="content">
        <div class="info">
            <div class="box" id="hoursTag">
                <p class="title">Hours</p>
                <p class="boxContent">
                    6 Days A Week | Closed Monday<br>
                    Tuesday-Thursday: 11:30AM - 10:30PM<br>
                    Friday: 11:30AM - 11PM<br>
                    Saturday: 12AM - 11PM<br>
                    Sunday: 12AM - 10:30PM<br>
                </p>
            </div>
            <div class="box" id="ordersTag">
                <p class="title">Order</p>
                <div class="boxContent">
                    <p>Rather stay in the comfort of your  home? We understand many of us are busy and simply don't have the time to dine in, so we're happy to provide delivery or pickup orders! Simply click on  one of the available delivery services! <span style="font-weight: bold; font-style: italic;">(prices may differ depending on seller)</span></p>
                    <div class="deliveryIcons">
                        <a href="https://www.delivery.com/cities/brooklyn/categories/restaurant/hayashi-sushi?address=" target="_blank"><img :src="delivery" alt="Delivery.com"></a>
                        <a href="https://www.grubhub.com/restaurant/hayashi-japanese-fusion-2901-ocean-ave-brooklyn/81593" target="_blank"><img :src="grubhub" alt="Grubhub"></a>
                        <a href="https://www.doordash.com/store/hayashi-japanese-cuisine-inc-brooklyn-976820/" target="_blank"><img :src="doordash" alt="Doordash"></a>
                        <a href="https://www.ubereats.com/new-york/food-delivery/hayashi/zFVOTplQRP-M6Y7zut4y2g?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkhheWFzaGklMjBTdXNoaSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUo0WGVCNldKRXdva1IyYVIyZk1ScDhwQSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E0MC41OTA2NSUyQyUyMmxvbmdpdHVkZSUyMiUzQS03My45NDk1MjY3JTdE" target="_blank"><img :src="ubereats" alt="Uber Eats"></a>
                    </div>
                    <p>Or if online ordering isn't your thing, feel free to call us at:</p>
                    <a href="tel:718-368-3668" id="phone"> 718-368-3668</a>
                    <br>
                    <a href="tel:718-368-3667" id="phone"> 718-368-3667</a>
                </div>
            </div>
        </div>
        <iframe id="mapTag" class="map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6059.5701426494925!2d-73.95198162422638!3d40.59049934504524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24462e98177e1%3A0x90f269c47c76a4d9!2sHayashi%20Sushi!5e0!3m2!1sen!2sus!4v1730395069663!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<script setup>
import banner from '@/components/banner.vue'
import orderBanner from '@/assets/orderBanner.png'
import delivery from '@/assets/delivery.png'
import grubhub from '@/assets/grubhub.png'
import doordash from '@/assets/doordash.png'
import ubereats from '@/assets/ubereats.png'
</script>

<style scoped>
.content{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-evenly;
    color: black;
    padding: 50px;
}

.info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2em;
}

.box{
    width: 37.5em;
    border: 5px solid #123461;
}

.map{
    width: 50em;
    border: 5px solid #123461;
}

.title{
    background-color: #123461;
    color: #f5f3ec;
    width: fit-content;
    font-size: 4em;
    padding: 0 10px;
    border-radius: 0 0 10px 0;
    margin: 0;
    margin-top: -5px;
}

.boxContent{
    font-size: 1.5em;
    padding: 10px;
}

.deliveryIcons{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;

    img{
        width: 10em;
        transition: transform 0.15s ease-in;
    }

    img:hover{
        transform: scale(1.1);
    }
}

#phone{
    font-size: 2em;
    color: #123461;
    transition: all 0.15s ease-in;
}

#phone:hover{
    font-size: 2.1em;
    color:#1b4f92
}

@media (max-width: 865px){
    .content{
        flex-direction: column;
        align-items: center;
        gap: 2em;
    }

    .info{
        gap: 2em;
    }

    .box{
        width: 100%;
    }

    .map{
        min-width: 133px;
        width: 100%;
        height: 400px;
    }
}
</style> 