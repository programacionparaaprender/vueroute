import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vuex from 'vuex';
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueTree from 'vue-jstree';
import routes from './routes';
import Axios from 'axios';
import state from './store.js';
import filter from './filters.js';
Vue.use(Vuex);
const store = new Vuex.Store(state);

Vue.config.productionTip = false;

//Vue.prototype.$http = Axios;

import axios from 'axios';
import VueAxios from 'vue-axios'; 
Vue.use(VueAxios, axios);

Vue.use(VueRouter);
Vue.use(VueTree);

const router = new VueRouter({
    scrollBehavior(to, from, savedPosition){
        //hace que la pantalla suba después de seleccionar
        if(savedPosition){
            return savedPosition;
        }else{
            return {x:0,y:0};
        }
        
    },
    routes,
    mode: 'history'
    });
//mode: 'history' se encarga de que ya no aparezca la almoadilla

axios.interceptors.response.use(response=>{
//console.log(response);
     return response; 
}, error=>{
    //console.log(error.response);
     if(error.response.status === 401){
        router.push('/404');
    } 
});

new Vue({
    router,
    'store': store,
    VueTree,
    render: h => h(App)
}).$mount('#app');