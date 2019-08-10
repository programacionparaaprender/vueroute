<template>
<div>

<div class="header clearfix">
        <nav>
          <ul class="nav nav-pills float-right">
            <router-link to='/paginavueroute/' tag="a" class="nav-item nav-link" exact>Home</router-link>           
            <router-link to='/paginavueroute/about' tag="a" class="nav-item nav-link">About</router-link>
            <router-link to='/paginavueroute/contact' tag="a" class="nav-item nav-link">Contact</router-link>
            <router-link to='/paginavueroute/login' tag="a" class="nav-item nav-link">Login</router-link>
            <router-link to='/paginavueroute/products' tag="a" class="nav-item nav-link">Products</router-link>
             <router-link to='/paginavueroute/webcam' tag="a" class="nav-item nav-link">Webcam</router-link>
            <!--
              <router-link to='/signup' tag="a" class="nav-item nav-link">Signup</router-link>
            <router-link to='/tree' tag="a" class="nav-item nav-link">Tree</router-link>
            <router-link to='/padre' tag="a" class="nav-item nav-link">Padre</router-link>
            -->
          </ul>
        </nav>
        <h3 class="text-muted">{{webtitle}}</h3>
      </div>

</div>
</template>
<style>

</style>
<script>
export default{
  props:[
    'webtitle'
  ]
}
</script>