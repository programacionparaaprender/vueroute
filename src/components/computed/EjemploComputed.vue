<template>
  
</template>

<script>
export default {
    data(){
        return{
            firstName:"",
            lastName:""
        }
    },
    computed: {
        fullName: {
            // getter
            get: function () {
            return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
            }
        }
    }
}
</script>

<style>

</style>