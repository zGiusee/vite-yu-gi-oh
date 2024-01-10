<script>
import CharactersCard from './CharactersCard.vue';
export default {
    name: 'CharactersList',
    components: {
        CharactersCard,
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="row">
        <CharactersCard></CharactersCard>
    </div>
</template>

<style lang="scss" scoped></style>
