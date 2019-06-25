




/*
const sql = require('mssql');
var config = {
    server: "localhost\SQLEXPRESS",
    database:"QuirkyBookProject",
    userName: "sa1",
    password: "123",
    port:1433
  }; 

const sql = require('mssql')
 
async () => {
    try {
        await sql.connect('mssql://username:password@localhost/database')
        const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}

  async () => {
    try {
        await sql.connect(config);//('mssql://sa1:123@localhost\SQLEXPRESS/QuirkyBookProject')
        const result = await sql.query('select * from Books');// where id = ${value}');
        console.dir(result);
    } catch (err) {
        // ... error checks
    }
}

var sql = require('mssql');
var config = {
    server: "localhost\SQLEXPRESS",
    database:"QuirkyBookProject",
    userName: "sa1",
    password: "123",
    port:1433
  };

function getEmp()
{
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn);
    config.connect(function(err){
        if(err){
            console.log(err);
        }
        req.query("select * from Books",function(err, recordser){
            if(err){
                console.log(err);
            }else{
                console.log(recordset);
            }
            conn.close();
        })
    });
}
getEmp();


*/




import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueTree from 'vue-jstree';
import routes from './routes';
import Axios from 'axios';
//import store from './store.js';
Vue.config.productionTip = false;

Vue.prototype.$http = Axios;

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
new Vue({
    router,
    //store,
    VueTree,
    render: h => h(App)
}).$mount('#app');