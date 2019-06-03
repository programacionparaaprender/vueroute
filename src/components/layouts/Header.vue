<template>
<div>

<div class="header clearfix">
        <nav>
          <ul class="nav nav-pills float-right">
            <router-link to='/' tag="a" class="nav-item nav-link" exact>Home</router-link>           
            <router-link to='/about' tag="a" class="nav-item nav-link">About</router-link>
            <router-link to='/contact' tag="a" class="nav-item nav-link">Contact</router-link>
            
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