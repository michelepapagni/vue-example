<template>
    <div class="movie">
        <img :src="movie.image" alt="">
        <h2>{{ movie.title }}</h2>
        <small>{{ movie.year }} </small>
        <p>{{ movie.overview }}</p>
    </div>
</template>

<script>
    export default {
        props: ['movie'],
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss">
    .movie {
        margin: 20px;
        padding: 20px;
        width: 300px;
        border: 1px solid grey;
        border-radius: 10px;
        img {
            max-width: 100%;
            margin-bottom: 30px;
        }
    }
</style>
