<template>
<div id="app">
    <input type="text" placeholder="姓名" v-model="person.name">
    <input type="number" v-model="person.age">
    <input type="text" v-model="person.des">
    <input type="button" value="移除" v-on:click="clear">
    <p>姓名：<span>{{person.name}}</span></p>
    <p>年龄：<span>{{person.age}}</span></p>
    <p>简介：<span>{{person.des}}</span></p>
    <p>时间：<span>{{person.time}}</span></p>
</div>

</template>
<script>
    export default{
        name:'app',
        data(){
            return{
                person:{
                    name:'',
                    age:'undefined',
                    des:'',
                    time:new Date().toLocaleString()
                }
            }
        },
        methods:{
            clear(){
                console.log('清除数据');
                this.person.name='';
                this.person.age='undefined';
                this.person.des=''              
            }
        }
    }
</script>