<script>
export default {
    name: 'CharactersCard',
    props: {
        Cards: Object,
    },
    data() {
        return {

        }
    },
    created() {

    },
}
</script>

<template>
    <!-- CARD -->
    <div class="col-2">
        <div>
            <h4>{{ Cards.type }}</h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
</style>
