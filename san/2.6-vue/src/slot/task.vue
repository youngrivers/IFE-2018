<template>  
    <div class="wrapper">
            <div class="task-card" v-bind:key="item.id" v-for="(item,index) in tasks">
                <slot v-if="index<3" v-bind:item="item">
                    <h3>task{{index+1}}</h3>
                </slot>
                <h3 v-if="index>2" style="color:red">task{{index+1}}</h3>
                <section class="content">
                    <p>标题：{{item.title}}</p>
                    <p>内容：{{item.content}}</p>
                    <p>时间：{{item.time}}</p>
                </section>
            </div>
    </div> 
</template>
<script>
    export default{
        props:['tasks'],
    }
</script>
<style>
p{
    display: block;
}
.wrapper{
    width: 100%;
    flex-wrap: wrap;
}
.task-card{
    width: 280px;
    height: 280px;
    display: flex;
    flex-direction: column;
}
.task-card h3{
    width: 100px;
    height: 36px;
    margin-bottom: 10px;
    font-size: 16px;
    border-radius: 3px;
    background: linear-gradient(180deg,#f7cf1d,#f1b826)
}
.task-card .content{
    flex-direction: column;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    width: 200px;
    height: 140px;
    background: url(../assets/images/sticky.jpg);
    background-size: 100% 100%;
}
.task-card .content p{
    width: 124px;
    margin: 5px;
    font-size: 14px;
}
.wrapper,.task-card,.task-card h3,.task-card .content{
    display: flex;
}
.task-card,.task-card h3,.task-card .content{
    position: relative;
    z-index: 0;
    align-items: center;
    justify-content: center;
}
.task-card:after,.task-card:before{
    content: "";
    display: block;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
}
.task-card:before{
    width: 240px;
    height: 240px;
    border-radius: 5px;
    background-color: #fcf0e2;
    box-shadow: 2px 2px 10px #181717
}
.task-card:after{
    width: 220px;
    height: 220px;
    border: 2px solid #f5cc9d;
}
</style>
