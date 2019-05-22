import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';


const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/register', component: Register, name: 'register' },
    { path: '/login', component: Login, name: 'login' },
];

export default routes;