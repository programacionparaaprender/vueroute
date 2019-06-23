<template>
<div>
    <div></div>
	<div class="cover">
        <div  class="col-md-12">
            <div class="text-center">
                Products {{ id }}
            </div>
        </div>
        <div class="row">
            <div class="col-md-8" style="margin:auto;">
                <div class="col-md-12 img-section">
                    <img src="http://placehold.it/200x100/000" />
                </div>
                <div class="col-md-12">
                    <h4>Product title</h4>
                    <p>Product description</p>
                    <a href="#" class="btn btn-success btn-sm"> ADD TO CART</a>
                </div>
            </div>
        </div>
        
    </div>
</div>
</template>
<script>
export default{
    data(){
        return{
            id:this.$route.params.id
        }
    },
    watch:{
        '$route'(to, from){
            this.id = to.params.id;
        }
    },
    mounted(){
        console.log(this.id);
    }
}
</script>

<style>
.text-center
{
    text-align:center;
}
.cover
{
    padding:20px;
    margin:40px 2px;
    border:1px solid #D2E0E6;
}	
.img-section img
{
    width:100%;
}
</style>