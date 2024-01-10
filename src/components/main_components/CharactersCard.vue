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
    <div class="my-cards-col">
        <div class="card-container">
            <img v-for="CardImg, Index in Cards.card_images" :key="index" :src="CardImg.image_url_small" alt="">
            <h4>{{ Cards.name }}</h4>
            <h5>{{ Cards.archetype }}</h5>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
@use '../../styles/partials/variables' as*;

.my-cards-col {
    width: calc(100% / 5 - 30px);
    background-color: $yu_orange;
    margin: 0px 0px 30px 0px;
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
