<template>
<center>
  <div id="app">
    <div></div>
    
        <div class="row">
            <div class="col-30-px">

              <div class="row"><router-link class="boton" to='/'>Home</router-link></div>
              <div class="row"><router-link class="boton" to='/register'>Register</router-link></div>
              <div class="row"><router-link class="boton" to='/login'>Login</router-link></div>
            </div>
            <div class="col-70-px">
                <router-view />
            </div>
        </div>
      
    </div>
  </center>
</template>
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />
<style>
/*<div class="row"></div>*/
#app
        {
            width:800px;
            height:300px;
            background-color:azure;
        }
        .boton
        {
            float:left;
            height:40px;
            width:100%;
            background-color:olive;
            font-size:14px;
            font-style:normal;
            font-family:Verdana, Geneva, Tahoma, sans-serif;
            text-align:center;
            text-decoration:none;
            padding: 10px 20px 10px 20px;
            color:white;
        }
        .boton:hover
        {
            text-decoration:none;
            color:white;
            background-color:blue;
        }
        .row
        {
            float:left;
            width:100%;
        }
        .col-20-px
        {
            float:left;
            width:20%;
        }
        .col-30-px
        {
            float:left;
            width:30%;
        }
        .col-70-px
        {
            float:left;
            width:70%;
        }
        .col-80-px
        {
            float:left;
            width:80%;
        }
</style>
<script>
export default {
}
</script>