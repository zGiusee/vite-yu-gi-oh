<script>
import axios from 'axios';

import Loader from './components/Loader.vue';
import Header from './components/Header.vue';
import CharactersList from './components/main_components/characterslist.vue';

import { store } from './store.js';

export default {
  components: {
    Header,
    Loader,
    CharactersList
  },
  data() {
    return {
      store,

    }
  },
  methods: {
    // DEFINISCO LA FUNZIONE CHE RECUPERI I DATI DALLA API
    getCharactersData() {
      axios.get(store.endpoint).then((response) => {
        store.CharacterData = response.data.data;
        store.loading = false;
        console.log(store.CharacterData)
      })

    }
  },
  created() {
    // RICHIAMO LA FUNZIONE CHE RECUPERI I DATI ALL'AVVIO DELLA PAGINA
    this.getCharactersData();

  },
}

</script>

<template>
  <Loader v-if="store.loading"></Loader>
  <div v-else>
    <Header></Header>
    <main>
      <div class="container ">
        <!-- CONTENITORE DELLA LISTA -->
        <CharactersList></CharactersList>
      </div>
    </main>
  </div>
</template>

<style lang='scss' scoped>
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;

main {
  background-color: $yu_orange;
  padding: 75px 0px;
}
</style>
