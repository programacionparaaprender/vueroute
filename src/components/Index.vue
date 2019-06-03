<template>
<div>

  <banner>
    
        <p slot-scope="name">{{name.text}}</p>
    
    <!-- Reemplaza al anterior -->
    
    <!-- por el slot se sustituye lo anterior tengo entendido -->
    <!--
    <p>
      Bienvenido a Programación para aprender
    </p>
    <button class="btn" style="background-color:white;">Continuar</button>-->
  </banner>

            
            
        

      <div class="row marketing">
        <div class="col-lg-6">
          <h4>Subheading</h4>
          <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

          <h4>Subheading</h4>
          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

          <h4>Subheading</h4>
          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </div>

        <div class="col-lg-6">
          <h4>Subheading</h4>
          <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

          <h4>Subheading</h4>
          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

          <h4>Subheading</h4>
          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </div>
      </div>
</div>
</template>
<script>
import Banner from './Banner.vue';

export default{
    components:{
      'banner':Banner
    },
    data(){
      return {
        website:'Ejemplo'
      };
    }
}
</script>
<style>

</style>
