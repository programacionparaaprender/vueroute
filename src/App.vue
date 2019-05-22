<template>
    <div id="app">
        <nav class="row">
            <router-link class="row" style="height:30px;background-color:orangered;" to='/'>
            Home
            </router-link>
            <router-link class="row" style="height:30px;background-color:orangered;" to='/register'>
            Register
            </router-link>
            <router-link class="row" style="height:30px;background-color:orangered;" to='/login'>
            Login
            </router-link>
        </nav>
        <router-view />
    </div>
</template>
<style>
    .row
    {
        width:100%;
        float:left;
    }
    #app
    {
        width:100%;
        height:100%;
    }
</style>
    <script >

    export default {
    }

    </script >
