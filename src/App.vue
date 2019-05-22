<template>
  <div id="app">
    <nav>
        <router-link class="boton" to='/'>Home</router-link>
        <router-link class="boton" to='/register'>Register</router-link>
        <router-link class="boton" to='/login'>Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
/*<div class="row"></div>*/
.row
{
    float:left;
    width:100%;
}
.boton
{
    border: 1px #ccc solid;
    background-color:red;
    color:white;
    padding: 5px 10px 5px 10px;
}
.boton:hover
{
    background-color:orange;
    color:white;
}
</style>
<script>
export default {
}
</script>