<template>
    <div class="root">
        <!-- <alertBox>发生一些错误。</alertBox> -->
        <h2>任务栏</h2>
        <taskWrapper v-bind:tasks="tasks">
            <template slot-scope="task">
            </template>
        </taskWrapper>
    </div>
</template>
<script>
import alertBox from './slot/alert-box.vue'
import taskWrapper from './slot/task.vue'
    export default{
        data(){
            return{
                tasks:[{
                    title:'slot',
                    content:'xxxx',
                    time:'2018-08-01'
                },{
                    title:'slot',
                    content:'xxxxx',
                    time:'2018-09-01'
                },{
                    title:'slot',
                    content:'xxxxx',
                    time:'2018-10-01'
                },{
                    title:'slot',
                    content:'xxxxx',
                    time:'2018-11-01',
                },{
                    title:'slot',
                    content:'xxxxx',
                    time:'2018-12-01'
                },{
                    title:'slot',
                    content:'xxxxx',
                    time:'2018-12-02'
                }
                ],
                colors:['red']
            }
        },
        computed:{
            addTask:function (i) {
                return i+1;
            }
        },
        components:{
            alertBox,
            taskWrapper,
        }
    }
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
body{
    background-color: #333;
    color: #333;
    font-size: 15.5px;
    font-family: -apple-system-font,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
}
.root{
    width: 840px;
    margin: 20px auto;
    background-color: #252424
}
h2{
    width: 100%;
    text-align: center;
    color: aliceblue;
    font-weight: 500;
    font-size: 24px;
}

</style>
