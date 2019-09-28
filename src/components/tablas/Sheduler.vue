<template>
    <div style="width:600px;">
        <h1>This is about page</h1>
        <p>Tittle description of about page</p>
        <time-picker v-model="tiempo1" format="HH:mm"></time-picker>
        <time-picker v-model="tiempo2" format="HH:mm"></time-picker>
        <v-client-table :data="entries" :columns="columns" :options="options">
            <button slot="p0000" slot-scope="props" class="cubo" :style="props.row.p0000">
            </button>
        </v-client-table>
    </div>
</template>
<style>
.cubo{
    display:block;
    height:20px;
    width:100%;
    border: 1px #ccc solid;
}
</style>
<script src="metodos.js"></script>
<script src="variables.js"></script>
<script>
import Vue from 'vue';
import TimePicker from 'vue-timepicker'
import {ServerTable, ClientTable, Event} from 'vue-tables-2';
Vue.use(ClientTable);

export default{
    name:"Sheduler",
    components:{
        ClientTable,
        TimePicker
    },
    data(){
        return {
            tiempo1:{
                HH:'00',
                mm:'00',
                ss:'00'
            },
            tiempo2:{
                HH:'00',
                mm:'00',
                ss:'00'
            },
            columns:['p0000', 'p0030', 'p0100', 'p0130', 'p0200', 'p0230', 'p0300', 'p0330', 'p0400', 'p0430', 'p0500', 'p0530', 'p0600', 'p0630', 'p0700', 'p0730', 'p0800', 'p0830', 'p0900', 'p0930', 'p1000', 'p1030', 'p1100', 'p1130', 'p1200', 'p1230', 'p1300', 'p1330', 'p1400', 'p1430', 'p1500', 'p1530', 'p1600', 'p1630', 'p1700', 'p1730', 'p1800', 'p1830', 'p1900', 'p1930', 'p2000', 'p2030', 'p2100', 'p2130', 'p2200', 'p2230', 'p2300', 'p2330'],
            entries:[
                {'p0000':'background-color:black;'},
                {'p0000':'background-color:black;'},
                {'p0000':'background-color:black;'},
                {'p0000':'background-color:black;'},
                {'p0000':'background-color:black;'},
                {'p0000':'background-color:black;'}
            ],
            options:{
                headings:{
    'p0000':'00:00',
    'p0030':'00:30',
    'p0100':'01:00',
    'p0130':'01:30',
    'p0200':'02:00',
    'p0230':'02:30',
    'p0300':'03:00',
    'p0330':'03:30',
    'p0400':'04:00',
    'p0430':'04:30',
    'p0500':'05:00',
    'p0530':'05:30',
    'p0600':'06:00',
    'p0630':'06:30',
    'p0700':'07:00',
    'p0730':'07:30',
    'p0800':'08:00',
    'p0830':'08:30',
    'p0900':'09:00',
    'p0930':'09:30',
    'p1000':'10:00',
    'p1030':'10:30',
    'p1100':'11:00',
    'p1130':'11:30',
    'p1200':'12:00',
    'p1230':'12:30',
    'p1300':'13:00',
    'p1330':'13:30',
    'p1400':'14:00',
    'p1430':'14:30',
    'p1500':'15:00',
    'p1530':'15:30',
    'p1600':'16:00',
    'p1630':'16:30',
    'p1700':'17:00',
    'p1730':'17:30',
    'p1800':'18:00',
    'p1830':'18:30',
    'p1900':'19:00',
    'p1930':'19:30',
    'p2000':'20:00',
    'p2030':'20:30',
    'p2100':'21:00',
    'p2130':'21:30',
    'p2200':'22:00',
    'p2230':'22:30',
    'p2300':'23:00',
    'p2330':'23:30'
    
},
                rowClassCallback(){
                    return 'bg-warning';
                },
                sortable: ['p0000'],
                filterable: ['p0000'],
                perPage:5,
                perPageValues: [10,25,50,100,500,1000],
                pagination: { chunk:10, dropdown: false }
            }
        }
    }
}
  </script>
