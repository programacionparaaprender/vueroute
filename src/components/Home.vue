<template>
    <div class="row jumbotron text-center">
        <h1>Página Principal</h1>
        <div class="row">
        <input type="button" value="Boton" v-on:click="boton()" />
        </div>
    </div>
</template>
<style>

</style>
<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
 
Vue.use(VueAxios, axios);
var api = "http://www.programandoconrupert.com/ws/servicio-gatos.php";
export default {
    methods:{
        boton:function(){
            Vue.axios.get(api).then((response) => {
                var json = JSON.stringify(response.data);
            console.log(json)
            })
            
            this.axios.get(api).then((response) => {
            console.log(response.data)
            })
            
            this.$http.get(api).then((response) => {
            console.log(response.data)
            })
        }
    }
}
</script>