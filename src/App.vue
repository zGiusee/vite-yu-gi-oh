<script>
import axios from 'axios';

import Header from './components/Header.vue';
import Main from './components/Main.vue';

import { store } from './store.js';

export default {
  components: {
    Header,
    Main
  },
  data() {
    return {


    }
  },
  methods: {
    // DEFINISCO LA FUNZIONE CHE RECUPERI I DATI DALLA API
    getCharactersData() {
      axios.get(store.endpoint).then((response) => {
        store.CharacterData = response.data.data
      })
    }
  },
  created() {
    // RICHIAMO LA FUNZIONE CHE RECUPERI I DATI ALL'AVVIO DELLA PAGINA
    this.getCharactersData();
    console.log(store.CharacterData)
  },
}

</script>

<template>
  <Header></Header>
  <Main></Main>
</template>

<style lang='scss' scoped>
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;
</style>
