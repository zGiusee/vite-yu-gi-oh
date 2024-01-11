<script>
import { store } from '../../store.js';

export default {
    data() {
        return {
            store,
        }
    },
    computed: {
        cardsAvaiable() {
            return store.CharacterData.length;
        }
    }
}
</script>
<template>
    <div>
        <span class="my-3 fs-4 fw-bold" v-if="cardsAvaiable > 0">Carte disponibili : {{ cardsAvaiable }}</span>
        <span v-else class="my-3 fs-4 fw-bold ">Non ci sono carte disponibili per l'archetipo selezionato</span>
    </div>
</template>
<style lang="scss">
@use '../../styles/generals.scss' as *;
</style>