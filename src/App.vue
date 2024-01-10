<script>
import axios from 'axios';

import Loader from './components/Loader.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

import { store } from './store.js';

export default {
  components: {
    Header,
    Main,
    Loader
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
    <Main></Main>
  </div>
</template>

<style lang='scss' scoped>
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;
</style>
