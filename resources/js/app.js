/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.component('movie-card', require('./components/MovieCardComponent.vue').default);

const app = new Vue({
    el: '#app',
    data: {
        newTitle: '',
        newYear: '',
        newOverview: '',
        newImage: '',
        movies: [{
                title: 'Ritorno al futuro',
                year: 1985,
                overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                image: 'https://images-na.ssl-images-amazon.com/images/I/71tkp3URReL._SY606_.jpg'
            },
            {
                title: 'Titanic',
                year: 1997,
                overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                image: 'http://www.bolognatoday.it/~shared/images/cinema/locandine/titanic-1hmla0.jpg'
            },
            {
                title: 'Boris',
                year: 2011,
                overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                image: 'https://pad.mymovies.it/filmclub/2010/10/026/locandina.jpg'
            },
        ]
    },
    methods: {
        addNewMovie: function() {
            var newMovieObject = {
                title: this.newTitle,
                year: this.newYear,
                overview: this.newOverview,
                image: this.newImage
            };

            this.movies.push(newMovieObject);
        }
    }
});
