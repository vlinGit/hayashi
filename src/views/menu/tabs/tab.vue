<template>
    <div class="tab">
        <div class="title">{{ props.title }}</div>
        <div class="sections">
            <div v-for="section in props.sections" :key="section.title" class="section">
                <p id="sectionTitle">{{ section.title }}</p>
                <div v-for="item in section.items" :key="name" class="item">
                    <div class="itemHeader">
                        <p id="itemName">{{ item.name }} -</p>
                        <p id="itemPrice">{{ item.price }}</p>
                    </div>
                    <p id="itemDescription">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Sections:
// [{title, items: [name, description, price]}]

const props = defineProps({
    title: String,
    sections: Array
});
</script>

<style scoped>
.tab{
    border: 5px solid #123461;
    border-radius: 0 10px 0 10px;
    width: 90%;
}

.title{
    background-color: #123461;
    color: #F5F3EC;
    font-size: 4em;
    padding: 10px;
}

.sections{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 10px 20px 20px 20px;

    .section{
        width: 40%;
    }

    #sectionTitle{
        font-size: 2em;
        margin-bottom: 0;
        font-weight: bold;
    }

    .itemHeader{
        display: flex;
        gap: 0.625em;
        font-size: 1.5em;
    }

    #itemName, #itemPrice{
        margin-bottom: 0;
    }

    #itemDescription{
        margin-top: 0;
    }
}
</style>