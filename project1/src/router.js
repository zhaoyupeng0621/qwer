import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/Movie.vue';
import Music from './views/Music'
import Book from './views/Book'
import Photo from './views/Photo'
import About from './views/About'
import MusicDetail from './views/MusicDetail'
import PhotoDetail from './views/PhotoDetail'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie,
      children:[
        {
          path:'about',
          name:'about',
          component:About,
        }
      ]
    },
    {
      path:'/music',
      name:'music',
      component:Music,
    },
    {
      path:'/music/music-detail',
      name:'music-detail',
      component:MusicDetail
    },
    {
      path:'/book',
      name:'book',
      component:Book,
    },
    {
      path:'/photo',
      name:'photo',
      component:Photo,
    },
    {
      path:'/photo/photo-detail',
      component:PhotoDetail
    }
    
  ],
});
