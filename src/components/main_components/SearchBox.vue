<script>
import { store } from '../../store.js';
export default {
    name: 'SearchBox',
    data() {
        return {
            store,
        }
    },
    methods: {
        // FUNZIONE CHE SVUOTA LA VARIABILE USATA PER LA RICERCA
        resetFilter() {
            store.archetype = " ";
            this.$emit('resetFilter')
        }
    },
}
</script>
<template>
    <div class="row my-5 justify-content-center align-items-end  ">
        <div class="col-3">
            <label for="filter" class="control-label">Archetype</label>

            <!-- SELECT CON IL V-MODEL CHE RIMPIE LA VARIABILE VUOTA -->
            <select class="form-select" id="filter" v-model="store.archetype" @change="$emit('sendSearch')">

                <option value=" ">Select Archetype</option>

                <!-- CICLO LE OPTION IN BASE A TUTTI GLI ARCHETIPI DISPONIBILI -->
                <option v-for="  archetype, index  in  store.archetypes  " :key="index" :value="archetype.archetype_name
                    ">{{
        archetype.archetype_name }}
                </option>
            </select>

        </div>

        <div class=" col-2">

            <!-- BOTTONE DI RICERCA CON FILTRI CON IL BOTTONE -->
            <!-- <button class="btn btn-primary mx-3" @click="$emit('sendSearch')"> Filter </button> -->

            <!-- BOTTONE DI RESET DELLA RICERCA -->
            <button class="btn btn-danger" @click="resetFilter"> Reset </button>

        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
</style>