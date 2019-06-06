import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueTree from 'vue-jstree';
import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueTree);
const router = new VueRouter({
    routes,
    mode: 'history'
    });
//mode: 'history' se encarga de que ya no aparezca la almoadilla
new Vue({
    router,
    VueTree,
    render: h => h(App)
}).$mount('#app');