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
      <ul>
        <li v-for="(item,index) in list" v-bind:key="item.id" v-on:click="toggle(index)">{{item.info}}</li>
      </ul>
      <task></task>
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
          info:'放大'
        },{
          info:'旋转'
        },{
          info:'向上'
        },{
          info:'翻转'
        },{
          info:'翻牌'
        },{
          info:'缩小'
        }]
      }
    },
    methods:{
      toggle:function (index) {
        console.log(index);
        
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
</style>
