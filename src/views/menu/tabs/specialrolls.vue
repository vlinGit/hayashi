<template>
    <tab title="Hayashi Special Rolls" :sections="sections"/>
</template>

<script setup>
import tab from '@/views/menu/tabs/tab.vue';

const sections = [
    {
        title: '',
        items: [
            {
                name: 'Dragon Roll',
                description: 'Eel, cucumber, topped with avocado & masago',
                price: '11'
            },
            {
                name: 'Oyster Roll',
                description: 'Fried oyster, avocado, cucumber, & masago, topped w. mayo & eel sauce',
                price: '10'
            },
            {
                name: 'Godzilla Roll',
                description: 'Deep fried spicy tuna, avocado roll, topped w. scallion, tabiko, spicy mayo & eel sauce',
                price: '11'
            },
            {
                name: 'Bagel Roll',
                description: 'Deep fried eel, cream chees & avocado roll, topped w. masago, scallion, spicy mayo & eel sauce',
                price: '11'
            },
            {
                name: 'Volcano Roll',
                description: 'Deep fried California roll, topped w. caviar, mayo & sweet chilli sauce',
                price: '13'
            },
            {
                name: 'Naruto Eel, Kani, Tuna or Salmon (No Rice)',
                description: 'One of one fish, avocado & caviar, wrapped in cucumber',
                price: '13'
            },
            {
                name: 'Rainbow Roll',
                description: 'Kani, cucumber & avocado, toppedw tih white tuna, tuna, salmon, sea bass & tobiki',
                price: '11'
            },
            {
                name: 'Spider Roll',
                description: 'Fried soft shell crab, cucumber, kaiware & avocado, topped w. caviar & mayo',
                price: '12'
            },
            {
                name: 'Sakura Roll',
                description: 'Spicy Salmon & crunch, topped w. shrimp, avocado & chef\'s special sauce',
                price: '12'
            },
            {
                name: 'King Crab Roll',
                description: 'Spicy king crab, avocado, scallion, crunch top w. tobiko',
                price: '13'
            },
            {
                name: 'Lobster Tail Tempura',
                description: 'Deep fried lobster lettuc & avocado, topped w. wasabi tobiko & mayo',
                price: '14'
            },
            {
                name: 'Emperor Roll',
                description: 'Black pepper tuna & asparagus & caviar topped w. smoked salmon, avocado & wasabi mayo sauce',
                price: '12'
            },
            {
                name: 'Fantastic Roll',
                description: 'Spicy white tuna, kani & cream cheese, topped w. snoked salmon, avocado & wasabi mayo sauce',
                price: '12'
            },
            {
                name: 'Seared Tuna Roll',
                description: 'Seared tuna, asparagus & caviar topped w. seared tuna, avocado, wasabi tobiko & wasabi sauce',
                price: '12'
            },
            {
                name: 'Kiss of Death Roll',
                description: 'Spicy tuna & eel tempura, topped w. white tuna, jalapeno pepper, tobiko & special hot chili sauce',
                price: '12'
            },
            {
                name: 'Ebi Ebi Roll',
                description: 'Shrimp tempura & cucumber, topped w, shrimp, avocado & eel sauce',
                price: '13'
            },
            {
                name: 'Double Spicy Roll',
                description: 'Spicy California roll, topped with spicy tuna, kaiware & spicy sauce',
                price: '11'
            },
            {
                name: 'Six Flags Roll',
                description: 'Cook tempura roll, crab, shrimp, avocado inside top w. spicy tuna, salmon, yellowtail spicy sauce & eel sauce',
                price: '14'
            },
            {
                name: 'Mango Roll',
                description: 'Alaskan king crab, avocado topped we. mango, tobiko & mango sauce',
                price: '14'
            },
            {
                name: 'Golden Eye Roll',
                description: 'Tuna, salmon, avocado, cucumber & masago in green soy paper, w. chef\'s special sauce',
                price: '13'
            },
            {
                name: 'Spicy Girl Roll',
                description: 'Spicy salmon, spicy yellowtail & avocado, topped w. spicy tuna & crunch',
                price: '12'
            },
            {
                name: 'Cowboy Roll',
                description: 'Spicy tuna, crunch & scallion, topped w. tuna, jalapeno pepper, hot sauce & spicy mayo',
                price: '12'
            },
            {
                name: 'Autumn Fairy Roll',
                description: 'Shrimp tempura & cucumber, topped w. kani salad, mix caviar & eel sauce',
                price: '12'
            },
            {
                name: 'Crazy Yellowtail Roll',
                description: 'Spicy yellowtail, avocado masago inside topped w. yellowtail, jalapeno & chili sauce',
                price: '12'
            },
            {
                name: 'White Tuna Amazing Roll',
                description: 'White tuna tempura spicy tuna inside top with white tuna black tobiko and mango eel sauce',
                price: '12'
            },
            {
                name: 'Christmas Roll',
                description: 'Grilled Salmon, onion, mayo, topped w. lobster salad & mix tobiko',
                price: '12'
            },
            {
                name: 'Super Dragon Roll',
                description: '2 Shrimp tempura, eel & cream cheese, topped w. avocado, eel sauce & spicy mayo',
                price: '13'
            }
        ]
    },
    {
        title: '',
        items: [
            {
                name: 'Dream Roll (No rice)',
                description: 'Mix green, avocado, shrimp tempura, spicy crab, crunch wrap with rice paper',
                price: '13'
            },
            {
                name: 'Fire Island Roll',
                description: 'Shrimp tempura inside, spicy tuna, avocado and black caviar on top with spicy eel sauce',
                price: '14'
            },
            {
                name: 'Magic Roll',
                description: 'Rock shrimp tempura inside topped w. lobster & chef\'s special sauce',
                price: '13'
            },
            {
                name: 'Pink Pearl Roll',
                description: 'Spicy tuna, salmon and crab stick wrapped with soybean nori crunch, tobiko eel sauce and spicy mayo',
                price: '13'
            },
            {
                name: 'Lovely Tuna Roll (No Rice)',
                description: 'Spicy tuna & avocado, wrapped in tuna, topped w. mix caviar & spicy sauce',
                price: '14'
            },
            {
                name: 'Oh My God Roll',
                description: 'Lobster tempura avocado inside top w. spicy tuna, mango, caviar & mango sauce',
                price: '15'
            },
            {
                name: 'Good Time Roll',
                description: 'Spicy crab meat, mango inside topped w. avocado, squid & chili sauce',
                price: '13'
            },
            {
                name: 'Dancing Ocean Roll',
                description: 'Spicy lobster, eel & cucumber inside, salmon and avocado on top',
                price: '13'
            },
            {
                name: 'Crazy Friday Roll (w. Black Rice)',
                description: '2 shrimp tempura, lobster inside, w. avocado & black fish egg, spicy eel sauce',
                price: '13'
            },
            {
                name: 'Angry Lobster Roll',
                description: 'Shrimp tempura, topped w. lobster salad, mix caviar & special sauce',
                price: '13'
            },
            {
                name: 'White Castle Roll',
                description: 'Spicy kani, avocado & mango inside topped w. live scallop & chef\'s special sauce',
                price: '15'
            },
            {
                name: 'Hayashi King Roll (w. Black Rice)',
                description: 'Spicy king crab, avocado, shrimp topped w. spicy salmon w. sweet chili sauce',
                price: '14'
            },
            {
                name: 'Hayashi Roll',
                description: 'Tuna, salmon, yellowtail, topped with spicy king crab, avocado, tobiko & special sauce',
                price: '16'
            },
            {
                name: 'Tri Color Roll',
                description: 'Salmon, avocado, special seaweed, tuna, yellowtail on top w. yummy sauce',
                price: '15'
            },
            {
                name: 'Napoleon Roll',
                description: 'Spicy tuna w. kani & avocado inside topped w. smoked salmon, pineapple & chef\'s special sauce',
                price: '14'
            },
            {
                name: 'Happy Roll',
                description: 'Lobster salad, cucumber, crunch out with shrimp, avocado and black tobiko',
                price: '14'
            },
            {
                name: 'Lady Gaga Roll',
                description: 'Shrimp tempura, mango, asparagus inside top w. spicy tuna, avocado & black tobiko in chef special sauce',
                price: '15'
            },
            {
                name: 'Fashion Roll',
                description: 'Tuna, salmon, yellowtail & avocado, topped w. lobster salad, tobiko & special sauce',
                price: '16'
            },
            {
                name: 'Scorpion King Roll',
                description: 'Soft shell crab roll combines w. super dragon roll',
                price: '18'
            },
            {
                name: 'Kraken Roll',
                description: 'Kani, avocado, cream cheese, masago, wrap w. grilled squid',
                price: '20'
            },
            {
                name: 'Dancing Roll',
                description: 'Eel, tobiko, cucumber, topped with eel & avocado',
                price: '13'
            },
            {
                name: 'Dragon Fly Roll',
                description: 'Shrimp tempura & cucumber, topped w. eel avocado & caviar w. eel sauce',
                price: '13'
            },
            {
                name: 'Mango Lobster Roll',
                description: 'Lobster tempura, avocado, masago & cream cheese, topped w. mango, eel sauce & mango sauce',
                price: '15'
            },
            {
                name: 'Fancy Eel Roll',
                description: 'Spicy tuna & crunch, topped w broiled eel',
                price: '15'
            },
            {
                name: 'Pink Lady Roll',
                description: 'Spicy salmon, shrimp tempura, avocado, cucumber & caviar in pink soy paper',
                price: '13'
            },
            {
                name: 'Valentine Roll',
                description: 'Tuna, salmon, yellowtail, avocado & caviar in pink soy paper w. special sauce',
                price: '14'
            },
            {
                name: 'Mango Hawaii Roll (w. Black Rice)',
                description: 'Salmon, avocado inside top w. mango caviar & eel sauce',
                price: '13'
            }
        ]
    }
]
</script>

<style scoped>

</style>