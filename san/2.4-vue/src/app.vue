<template>
<div class="parents">
    <Father v-on:main="parents=$event"></Father>
    <div class="alert alert-danger" role="alert">我是更高层父组件:{{parents}}</div>
</div>
</template>
<script>
import Father from './tem/father.vue'
    export default{
        data(){
            return{
                parents:'我也静静等待用户输入'
            }
        },
        components: {
            Father
        },
    }
</script>
