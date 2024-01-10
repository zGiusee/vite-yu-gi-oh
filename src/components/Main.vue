<script>
import CharactersList from './main_components/CharactersList.vue';
export default {
    name: 'Main',
    components: {
        CharactersList,
    },
    data() {
        return {

        }
    },
}
</script>
<template lang="">
    <main>
        <div class="container ">
            <!-- CONTENITORE DELLA LISTA -->
            <CharactersList></CharactersList>
        </div>
    </main>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

main {
    background-color: $yu_orange;
    padding: 75px 0px;
}
</style>