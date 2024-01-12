<script>
import axios from 'axios';

import Loader from './components/Loader.vue';
import Header from './components/Header.vue';
import SearchBox from './components/main_components/SearchBox.vue';
import CharactersList from './components/main_components/characterslist.vue';
import cardLoader from './components/main_components/cardLoader.vue'
import cardCounter from './components/main_components/cardCounter.vue'

import { store } from './store.js';

export default {
  components: {
    Header,
    Loader,
    CharactersList,
    SearchBox,
    cardLoader,
    cardCounter
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

        // NUMERO TOTALE
        // api += `?archetype=${store.archetype}`;

        // NUMERO RISTRETTO DI CARTE VISIBILI
        api += `archetype=${store.archetype}${store.apiNumberFilter}`

      } else {
        api += store.apiNumberFilter;
      }

      store.cardLoader = true;

      axios.get(api).then((response) => {

        // Inserisco un timeout per far si che il loader sia visibile a schermo (scelta discutibile)
        setTimeout(() => {

          store.CharacterData = response.data.data;

          store.loading = false;

          store.cardLoader = false;

        }, 1000)

      });


    }
  },
  created() {
    // RICHIAMO LA FUNZIONE CHE RECUPERI I DATI ALL'AVVIO DELLA PAGINA
    this.getCharactersData();

    axios.get(store.archetypeApi).then((response) => {
      store.archetypes = response.data;
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
        <SearchBox @resetFilter="getCharactersData" @sendSearch="getCharactersData"></SearchBox>
        <cardCounter></cardCounter>

        <!-- LOADER DELLE CARTE -->
        <cardLoader v-if="store.cardLoader"></cardLoader>
        <!-- CONTENITORE DELLA LISTA -->
        <div v-else>
          <CharactersList></CharactersList>
        </div>

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
