import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    Generate: { fallback: true },
   // modules: ['@nuxt/content'],
   meta: {
        title: 'änny - Das Lernspielmöbel',
        name: 'description',
        content: 'Lernspielmöbel',
        scrollPos: {
            x: 0,
            y: 0
          }    
    },
    link: [
        {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/mno8zad.css'
        } 
    ],    
    css: [
        '~/assets/scss/main.scss'
        ],
    methods: {
        color: function(hex){
            console.log(hex)
        }
     },
     script: [
        {
          src: "assets/js/nav.js",
          body: true
        },],
});

