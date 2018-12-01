<template>
  <transition v-bind:name="way">
    <div class="task-card" v-if="tf">
      <h3>{{way}}</h3>
      <section class="content">
        <p>标题：{{title}}</p>
        <p>内容：{{tf}}</p>
        <p>时间：{{num}}</p>
      </section>
    </div>
  </transition>
</template>
<script>
  export default{
    props:['way','title','num','tf'],
    computed:{

    }
  }
</script>
<style>
.task-card{
  position: absolute;
    width: 280px;
    height: 280px;
    display: flex;
    flex-direction: column;
    z-index: 100;
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
    background: url(../assets/sticky.jpg);
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
/* 放大 */
.magnify-enter-active, .magnify-leave-active{
  transition: all 0.5s ease-out;
}
.magnify-enter{
  transform: scale(0);opacity:0;
}
.magnify-leave-to{
  transform: scale(1);opacity: 1;
}
/* 旋转 */
.rotate-enter-active, .rotate-leave-active{
  transition: all 0.5s ease-out;
}
.rotate-enter{
  transform: scale(1) rotate(360deg);opacity:1;
}
.rotate-leave-to{
  transform: scale(0) rotate(0);opacity:0;
}
/* 向上 */
.up-enter-active, .up-leave-active{
  transition: all 0.5s ease-out;
}
.up-enter{
  transform: translateY(30%);opacity: 0;
}
.up-leave-to{
  transform: translateY(0);opacity: 1;
}
/* 翻转 */
.overturn-enter-active, .overturn-leave-active{
  transition: all 0.5s ease-out;
}
.overturn-enter{
  transform: rotateY(-70deg);opacity: 0;
}
.overturn-leave-to{
  transform: translateY(0);opacity: 1;
}
/* 翻牌 */
.turnover-enter-active, .turnover-leave-active{
  transition: all 0.5s ease-out;
}
.turnover-enter{
  transform: rotateX(-100deg);
}
/* 变小 */
.shrink-enter-active, .shrink-leave-active{
  transition: all 0.5s ease-out;
}
.shrink-enter{
  transform: scale(2);opacity: 0;
}
.shrink-leave{
  transform: scale(1);opacity: 1;
}
</style>
