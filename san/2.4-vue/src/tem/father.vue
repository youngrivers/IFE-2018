<template>
    <div>
        <child v-on:change="$emit('main',parent=$event)" v-bind:value="parent"></child>
        <div class="alert alert-success" role="alert">我是父组件:
            <input type="text" v-model="parent">
            <button class="btn btn-success" type="button" v-on:click="up">通知子组件</button>
        </div>
    </div>
</template>
<script>
    //import Child from './child.vue'
    import Vue from 'vue'
    Vue.component('child', {
        props:['value'],
        template:`
        <div>
            <span>子组件</span>
            <input type="text" v-model="child"><span>x:{{value}}</span>
            <button class="btn btn-info" value="通知父组件" type="button" v-on:click="$emit('change',child)">通知父组件</button>
        </div>
        `,
        data(){
            return{
                child:''
            }
        }
    })
    export default {
        data(){
            return{
                parent:'静静等待用户输入'
            }
        },
        methods:{
            up(){
                console.log(this.parent,this.props);
                
            }
        }
    }
</script>