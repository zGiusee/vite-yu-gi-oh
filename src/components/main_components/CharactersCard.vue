<script>
export default {
    name: 'CharactersCard',
    props: {
        Cards: Object,
    },
    data() {
        return {

        }
    },
    created() {

    },
}
</script>

<template>
    <!-- CARD -->
    <div class="col-2 m-3  my-cards-col ">
        <div class="card-container">

            <!-- <img v-for="CardImg in Cards.card_images" :src="CardImg.image_url_small" alt=""> -->

            <!-- OPPURE VERSIONE MIGLIORATA RIGA 26 -->
            <img :src="Cards.card_images[0].image_url_small" alt="">
            <h4>{{ Cards.name }}</h4>
            <h5>{{ Cards.archetype }}</h5>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
@use '../../styles/partials/variables' as*;

.my-cards-col {
    // width: calc(100% / 5 - 30px);
    background-color: $yu_orange;
}

.card-container {
    padding-bottom: 10px;
    text-align: center;

    h4 {
        color: white;
        font-weight: bold;
        font-size: 22px;
    }

    h5 {
        font-size: 16px;
    }

    h4,
    h5 {
        margin-top: 15px;
    }

    img {
        width: 100%;
    }
}
</style>
