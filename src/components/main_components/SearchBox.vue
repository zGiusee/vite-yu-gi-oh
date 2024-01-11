<script>
import { store } from '../../store.js';
export default {
    name: 'SearchBox',
    data() {
        return {
            store,
        }
    },

}
</script>
<template>
    <div class="row my-5 justify-content-center align-items-end  ">
        <div class="col-3">
            <label for="filter" class="control-label">Archetype</label>
            <select class="form-select" id="filter" v-model="store.archetype">
                <option value=" ">Select Archetype</option>
                <option v-for="archetype, index in store.archetypes" :key="index" :value="archetype.archetype_name">{{
                    archetype.archetype_name }}
                </option>
            </select>
        </div>

        <div class="col-2">
            <button class="btn btn-danger" @click="$emit('sendSearch')"> Filter </button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
</style>