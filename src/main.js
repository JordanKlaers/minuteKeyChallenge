'use strict';
import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import store from "./store/store"

import MainPage from '_templates_/MainPage.vue';
import FocusedPage from '_templates_/FocusedPage.vue';

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/item',
        component: FocusedPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
