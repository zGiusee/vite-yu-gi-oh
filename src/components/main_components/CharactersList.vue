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
    <div class="row">
        <CharactersCard v-for="Cards, index in store.CharacterData" :key="index" :Cards="Cards">
        </CharactersCard>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
</style>
