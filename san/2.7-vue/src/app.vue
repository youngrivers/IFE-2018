<template>
  <div>
    <div>
      <button v-on:click='show=!show'>
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
      <transition name="slide-fade">
        <p v-if="show">NMLS</p>
      </transition>
      <transition name=bounce>
        <p v-if="show">bdjbvdksbvdshbvjsbvksvkdbhsvbdksbvkdsbvksdjk</p>
      </transition>
    </div>
    <div>
      <ul class="eList">
        <li v-for="(item,index) in list" v-bind:key="item.id" v-on:click="toggle(item,index)">{{item.info}}:{{item.way}}</li>
      </ul>
      <task 
        v-for="(post,index) in list"
        v-bind:key="post.id"
        v-bind:title="post.info"
        v-bind:num='index'
        v-bind:way='post.way'
        v-bind:tf="post.list_show"></task>
    </div>
  </div>
</template>
<script>
import task from './components/task.vue'
  export default{
    data(){
      return{
        show:true,
        list:[{
          info:'放大',
          way:'magnify',
          list_show:false,
        },{
          info:'旋转',
          way:'rotate',
          list_show:false,
        },{
          info:'向上',
          way:'up',
          list_show:false,
        },{
          info:'翻转',
          way:'overturn',
          list_show:false,
        },{
          info:'翻牌',
          way:'turnover',
          list_show:false,
        },{
          info:'缩小',
          way:'shrink',
          list_show:false,
        }],
      }
    },
    methods:{
      toggle:function (item,index) {
        console.log(index);
        item.list_show=!item.list_show;
      }
    },
    components:{
      task
    }
  }
</script>
<style>
.fade-enter-active, .fade-leave-active{
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.slide-fade-enter-active{
  transition: all 0.3s ease;
}
.slide-fade-leave-active{
  transition: all .8s cubic-bezier(1, 0, 0, 1)
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active{
  animation: bounce-in .5s;
}
.bounce-leave-active{
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0%{
    transform: scale(0);
  }50%{
    transform: scale(1.5);
  }100%{
    transform: scale(1);
  }
}
.eList{
  list-style: none;
  display: inline-block;
}
.eList li{
  cursor: pointer;
}
.eList li:hover{
  color: coral;
}
</style>
