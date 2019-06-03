import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Index from './components/Index.vue';
import Login from './components/auth/Login.vue';
import Signup from './components/auth/Signup.vue';

const routes = [
    { path: '/', component: Index },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
];


export default routes;