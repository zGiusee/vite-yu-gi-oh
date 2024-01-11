<script>
import axios from 'axios';

import Loader from './components/Loader.vue';
import Header from './components/Header.vue';
import SearchBox from './components/main_components/SearchBox.vue';
import CharactersList from './components/main_components/characterslist.vue';
import cardLoader from './components/main_components/cardLoader.vue'

import { store } from './store.js';

export default {
  components: {
    Header,
    Loader,
    CharactersList,
    SearchBox,
    cardLoader
  },
  data() {
    return {
      store,

    }
  },
  methods: {
    // DEFINISCO LA FUNZIONE CHE RECUPERI I DATI DALLA API
    getCharactersData() {
      // DEFINISCO LA VARIABILE DELL'ENDPOINT (API URL)
      let api = store.endpoint;

      if (store.archetype !== " ") {

        api += `?archetype=${store.archetype}`;

      }
      axios.get(api).then((response) => {
        store.CharacterData = response.data.data;
        store.loading = false;
        store.cardLoader = false;

      })


    }
  },
  created() {
    // RICHIAMO LA FUNZIONE CHE RECUPERI I DATI ALL'AVVIO DELLA PAGINA
    this.getCharactersData();

    axios.get(store.archetypeApi).then((response) => {
      store.archetypes = response.data;
      console.log(store.archetypes)
    })

  },
}

</script>

<template>
  <!-- LOADER DELLA PAGINA -->
  <Loader v-if="store.loading"></Loader>
  <div v-else>
    <Header></Header>
    <main>
      <div class="container ">
        <SearchBox @sendSearch="getCharactersData"></SearchBox>
        <!-- LOADER DELLE CARTE -->
        <cardLoader v-if="store.cardLoader"></cardLoader>
        <!-- CONTENITORE DELLA LISTA -->
        <CharactersList v-else></CharactersList>
      </div>
    </main>
  </div>
</template>

<style lang='scss' scoped>
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;

main {
  background-color: $yu_orange;
  height: 100%;
  padding: 75px 0px;
}
</style>
