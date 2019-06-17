import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/auth/Login.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Index from './components/Index.vue';
import Signup from './components/auth/Signup.vue';
import Tree from './components/Tree.vue';
import Padre from './components/Padre.vue';
import Products from './components/product/Index.vue';
import Details from './components/product/Details.vue';
import Error from './components/layouts/Error.vue';
const routes = [
    { path: '/', component: Index },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/signup', component: Signup },
    { path: '/register-now', redirect:'/signup' },
    { path: '/products', component: Products },
    { path: '/404', component: Error },
    { path: '*', redirect:'/404' },
    { path: '/product-detail/:id', component: Details,name:'product' },
    
    /*
    { path: '/tree', component: Tree },
    { path: '/padre', component: Padre },
    */
];


export default routes;