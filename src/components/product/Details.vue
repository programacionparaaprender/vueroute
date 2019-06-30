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
                <div v-if="errors.length!=0" class="alert alert-danger">
                    <ul>
                        <li v-for="error in errors">
                            {{error}}
                        </li>
                    </ul>    
                </div>
                <div class="col-md-12 img-section">
                    <img src="http://placehold.it/200x100/000" />
                </div>
                <div class="col-md-12">
                    <h4>{{product.title}}</h4>
                    <p>{{product.description}}</p>
                    <p><em>{{product.quantity}}</em></p> 
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
            id:this.$route.params.id,
            product:[],
            errors:[]
        }
    },
    created()
    {
        this.$http.get('https://vue-http-6a741.firebaseio.com/products.json',{
            params:{
                data: this.id
            }
        }).then(
            response=>{
                //var data = JSON.stringify(response.data[this.id]['data']);
                //this.product = Object.values(response.data);
                var data = response.data[this.id]['data'];
                this.product = data;
                //console.log(this.product);
            }
        ).catch(e=>{
            this.errors = e.response.data;
                //console.log(e);
            });            
        /* axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            console.log(response.data);
            }); */
        /* this.$http.get('https://vue-http-6a741.firebaseio.com/products.json'+this.id+'.json').then(
            response=>{
                this.product = response.data;
                console.log(this.product);
            }
        ).catch(e=>{
                console.log(e);
            });             */

    },
    watch:{
        '$route'(to, from){
            this.id = to.params.id;
        }
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