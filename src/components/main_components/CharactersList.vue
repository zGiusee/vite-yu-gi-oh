<script>
import CharactersCard from './CharactersCard.vue';

import { store } from '../../store.js';
export default {
    name: 'CharactersList',
    components: {
        CharactersCard,
    },
    data() {
        return {
            store,
        }
    },
    created() {

    }
}
</script>

<template>
    <div class="list-container">
        <CharactersCard v-for="Cards, index in store.CharacterData" :key="index" :Cards="Cards">
        </CharactersCard>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;

.list-container {
    background-color: white;
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
