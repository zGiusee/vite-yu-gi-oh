<script>
export default {
    name: 'Header',
    data() {
        return {

        }
    },
}
</script>

<template>
    <header>
        <div class="container-fluid">
            <div class="row">

                <!-- Header logo and title -->
                <div class="col-12">
                    <div class="d-flex">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/800px-Yu-Gi-Oh%21_%28Logo%29.jpg"
                            alt="">
                        <h1>Yu-Gi-Oh Api</h1>
                    </div>
                </div>

            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

header {
    padding: 20px 0px;

    h1 {
        margin-left: 10px;
        vertical-align: middle;
    }

    img {
        width: 180px;
        vertical-align: middle;
    }
}
</style>
