<template>
<div id="app">
    <input type="button" value="添加" class="btn btn-primary" v-on:click="addUser">
    <table class="table">
        <thead>
            <tr>
                <th scope="col">姓名</th>
                <th scope="col">审核状态</th>
                <th scope="col">操作</th>
            </tr>
        </thead>
        <tbody>
            <tr 
                v-for="(person,index) in persons"
                v-bind:key="person.id"
                v-on:remove="this.persons.splice(index,1)"
                >
                <th>{{person.name}}</th>
                <th>
                    <span v-if="person.condition===1">合格</span>
                    <span v-else-if="person.condition===-1">不合格</span>
                    <span v-else>待审核</span>
                </th>
                <th>
                    <!-- {{person.operation===1?"删除":"审核"}} -->
                    <input v-if="person.operation===1" class="btn btn-primary" type="button" value="删除" v-on:click="clear(index)">
                    <input v-if="person.operation===0" class="btn btn-primary" type="button" value="审核" v-on:click="change(index)">
                </th>
            </tr>
        </tbody>
    </table>
</div>

</template>
<script>
    export default{
        name:'app',
        data(){
            return{
                person_name:'666',
                persons: [
                    {id:1, name: '张三', condition: 1, operation: 1 },
                    {id:2, name: '李四', condition: -1, operation: 1 },
                    {id:3, name: '王五', condition: 0, operation: 0 },
                    {id:4, name: '赵六', condition: 0, operation: 0 },
                    {id:5, name: '孙七', condition: 0, operation: 0 },
                ],
                person_id:6
            }
        },
        methods:{
            clear(index){
                console.log('清除数据'+(parseInt(index)+1));
                this.persons.splice(index,1);            
            },
            change(index){
                console.log('审核'+(parseInt(index)+1));
                this.persons[index].condition=1;
                this.persons[index].operation=1;
            },
            addUser(){
                //let i=this.person_id;
                console.log("添加数据",this.person_id);
                this.persons.push({
                    id:this.person_id++,name:this.person_name,condition:0,operation:0
                })
            }
        }
    }
</script>