<template>
    <tab title="Appetizers" :sections="sections" />
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue'

const sections = [
    {
        title: 'Sushi-bar Appetizers',
        items: [
            {
                name: 'Baby Tako',
                description: 'Baby octopus',
                price: '11'
            },
            {
                name: 'Kani or Tako Su',
                description: 'Crabstick or octopus in ponzu sauce',
                price: '11'
            },
            {
                name: 'Sunomono Combination',
                description: 'Surf clam, shrimp, egg, octopus, crabstick, salmon in ponzu sauce',
                price: '12'
            },
            {
                name: 'Tuna or Beef Tataki',
                description: 'Sliced tuna or beef, masago w. chefs sauce',
                price: '12'
            },
            {
                name: 'Black Pepper Tuna Sashimi',
                description: 'Black Pepper Tuna Sashimi',
                price: '12'
            },
            {
                name: 'Carpaccio',
                description: 'Salmon, tuna, yellowtail, avocado, spicy sauce and caviar',
                price: '13'
            },
            {
                name: 'Spicy Salmon or Spicy Tuna Tartar',
                description: 'Chopped tuna or salmon w. quail egg & caviar',
                price: '12'
            },
            {
                name: 'Yellowtail Jalapeno',
                description: 'Sliced yellowtail, jalapeno, massago w. chefs sauce',
                price: '15'
            },
            {
                name: 'Fantastic Island',
                description: 'Tuna, salmon, yellowtail & masago on avocado w. wasabi yuzu sauce',
                price: '15'
            },
            {
                name: 'Wasabi Cracker',
                description: 'Spicy Tuna or spicy salmon',
                price: '13'
            },
            {
                name: 'Tri Color Tartar',
                description: 'Chopped tuna, salmon, yellowtail in chefs sauce',
                price: '16'
            },
            {
                name: 'Kyoto Sea Breeze',
                description: 'Spicy kani, shrimp & crunch wrapped in avocado bowl',
                price: '15'
            },
            {
                name: 'Sushi Pizza',
                description: 'Choice of tuna, salmon or eel with avocado, masago, crispy pancake, cheese & chefs special',
                price: '15'
            },
            {
                name: 'Summer Appetizer',
                description: 'Tuna, salmon, white tuna, avocado, w. rice paper & sweet chili sauce',
                price: '15'
            },
            {
                name: 'Hawaiian Poke Bowl',
                description: 'Tuna, salmon, white tuna, avocado, seaweed w. poke sauce',
                price: '15'
            },
            {
                name: 'Duck Crepe',
                description: 'Grill duck, mix green and cucumber wrap with pancake, spicy mayo and eel sauce',
                price: '15'
            },
            {
                name: 'Black Ninja',
                description: 'Spicy salmon, eel, mix green avocado & crunch werapped in rice paper w. spicy eel sauce',
                price: '15'
            },
            {
                name: 'Tuna Dumpling',
                description: 'Spicy tuna, avocado wrapped with tuna served yuzu sauce',
                price: '18'
            },
            {
                name: 'Oyster Shot',
                description: 'w. quail egg, caviar & chefs special sauce',
                price: '20'
            }
        ]
    },
    {
        title: 'Kitchen Appetizers',
        items: [
            {
                name: 'Agedashi Tofu',
                description: 'Deep fried tofu',
                price: '8'
            },
            {
                name: 'Haru Maki(3)',
                description: 'Veg. spring roll',
                price: '7'
            },
            {
                name: 'Edamame',
                description: '',
                price: '6'
            },
            {
                name: 'Gyoza',
                description: 'Pork or vegetable pan fried dumplings',
                price: '7'
            },
            {
                name: 'Shumai',
                description: 'Japanese shrimp dumpling, steamed or fried',
                price: '7'
            },
            {
                name: 'Wasabi Shumai',
                description: '',
                price: '8'
            },
            {
                name: 'French Fries',
                description: '',
                price: '7'
            },
            {
                name: 'Miso Eggplant',
                description: '',
                price: '10'
            },
            {
                name: 'Takoyaki(6)',
                description: 'Deep-fried tako ball',
                price: '9'
            },
            {
                name: 'Age Chicken',
                description: 'Deep fried chicken',
                price: '10'
            },
            {
                name: 'Fried Chicken Wings',
                description: 'Marinated and served with sweet and spicy sauce',
                price: '12'
            },
            {
                name: 'Tempura Appetizer',
                description: 'Fried shrimp & veg. w. tempura sauce',
                price: '10'
            },
            {
                name: 'Yakitori(2)',
                description: 'Beef, salmon or chicken on skewer',
                price: '10'
            },
            {
                name: 'Garlic Broccoli',
                description: 'Sauteed broccoli w. garlic & butter',
                price: '12'
            },
            {
                name: 'Beef Short Ribs',
                description: 'House korean marinated short ribs',
                price: '17'
            },
            {
                name: 'Cheese Cracker',
                description: '',
                price: '10'
            },
            {
                name: 'Beef or Chicken Negimaki',
                description: 'Sliced beef or chicken rolled w. scallion & teriyaki sauce',
                price: '11'
            },
            {
                name: 'Fried Calamari',
                description: '',
                price: '12'
            },
            {
                name: 'Grilled Mussels',
                description: 'Mussel w. Japanese mayo & caviar',
                price: '12'
            },
            {
                name: 'Fried Soft Shell Crab',
                description: '',
                price: '12'
            },
            {
                name: 'Kaki Fry',
                description: 'Deep fried oyster',
                price: '10'
            },
            {
                name: 'Bar-B-Q Squid',
                description: '',
                price: '15'
            },
            {
                name: 'Seafood Dynamite',
                description: 'Broiled scallop, mushroom, kani, shrimp, fish w. mayonnaise, cheese & caviar',
                price: '14'
            },
            {
                name: 'Rock Shrimp',
                description: '',
                price: '13'
            },
            {
                name: 'Spicy Tuna Gyoza',
                description: 'Lightly fried crispy gyoza served w. guacamole, sweet chili sauce',
                price: '13'
            },
            {
                name: 'Hamachi Kama',
                description: 'Broiled yellowtail',
                price: '13'
            },
            {
                name: 'Duck Roll',
                description: 'Grill duck with mix green mango wrapped with soft rice paper & chefs special sauce',
                price: '15'
            },
            {
                name: 'Combination',
                description: 'Vegetable spring roll, rock shrimp, fried chicken wings',
                price: '20'
            }
        ]
    }
]
</script>

<style scoped>

</style>