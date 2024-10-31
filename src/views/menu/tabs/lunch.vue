<template>
    <tab title="Hayashi Lunch | From 11:30 am - 4:00 pm" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: 'All served with soup or salad',
        items: [
            {
                name: 'Sushi Lunch',
                price: 15,
                description: '5 pcs. sushi & 1 California roll'
            },
            {
                name: 'Chirashi',
                price: 18,
                description: '8 pcs. assorted raw fish over rice'
            },
            {
                name: 'Sashimi Lunch',
                price: 20,
                description: '10 pcs. assorted raw fish'
            },
            {
                name: 'Unagi Don',
                price: 18,
                description: 'Broiled eel over rice'
            },
            {
                name: 'Sushi & Sashimi Combo',
                price: 22,
                description: '4 pcs. sushi, 6 pcs. & 1 California roll'
            }
        ]
    },
    {
        title: 'Lunch Special Roll | Regular Roll or Hand Roll',
        items: [
            {
                name: 'Any 2 Rolls',
                price: '11'
            },
            {
                name: 'Any 3 Rolls',
                price: '13'
            },
        ]
    },
    {
        title: 'Lunch Plate $12',
        items: [
            {
                name: 'Tofu Teriyaki'
            },
            {
                name: 'Chicken Teriyaki'
            },
            {
                name: 'Ginger Pork Teriyaki'
            },
            {
                name: 'Beef Negimaki'
            },
            {
                name: 'Chicken Negimaki'
            },
            {
                name: 'Chicken Tempura'
            },
            {
                name: 'Shrimp Tempura'
            },
            {
                name: 'Chicken Katsu'
            },
            {
                name: 'Pork Katsu'
            },
            {
                name: 'Fish Katsu'
            },
            {
                name: 'Beef Teriyaki'
            },
            {
                name: 'Salmon Teriyaki'
            },
            {
                name: 'Shrimp Teriyaki'
            },
            {
                name: 'Black Pepper Chicken or Beef',
                price: 14
            },
            {
                name: 'Red Curry Chicken (spicy)',
                price: 14
            },
            {
                name: 'Red Curry Shrimp (spicy)',
                price: 14
            },
            {
                name: 'Mango Chicken or Shrimp',
                price: 14,
                description: 'Sauteed w. fresh mango & pepper in Thai sweet sauce'
            },
            {
                name: 'Pattaya Salmon',
                price: 14,
                description: 'Grilled salmon with mix vegetables in curry sauce'
            }
        ]
    },
    {
        title: 'Lunch Box Combo $14 | Served with shumai, California roll and rice',
        items: [
            {
                name: 'Ginger Pork Teriyaki'
            },
            {
                name: 'Salmon Teriyaki'
            },
            {
                name: 'Chicken Teriyaki'
            },
            {
                name: 'Shrimp Teriyaki'
            },
            {
                name: 'Beef Teriyaki'
            },
            {
                name: 'Tofu Teriyaki'
            },
            {
                name: 'Chicken Negimaki'
            },
            {
                name: 'Beef Negimaki'
            },
            {
                name: 'Pork Katsu'
            },
            {
                name: 'Chicken Katsu'
            },
            {
                name: 'Fish Katsu'
            },
            {
                name: 'Shrimp Tempura'
            },
            {
                name: 'Chicken Tempura'
            },
            {
                name: 'Red Curry Chicken (spicy)',
                price: 16
            },
            {
                name: 'Red Curry Shrimp (spicy)',
                price: 16
            }
        ]
    },
    {
        title: 'Hibachi Lunch $13',
        items: [
            {
                name: 'Hibachi Chicken'
            },
            {
                name: 'Hibachi Salmon'
            },
            {
                name: 'Hibachi Fried Rice',
                price: '4'
            },
            {
                name: 'Hibachi Steak'
            },
            {
                name: 'Hibachi Shrimp'
            },
            {
                name: 'Hibachi Noodle',
                price: '7'
            }
        ]
    }
]
</script>

<style scoped>

</style>