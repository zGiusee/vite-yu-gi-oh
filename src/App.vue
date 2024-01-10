<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

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

  },
}

</script>

<template>
  <Header></Header>
  <Main class="bg-my"></Main>
</template>

<style lang='scss' scoped>
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;

.bg-my {
  background-color: $yu_orange;
  height: 100vh;
}
</style>
