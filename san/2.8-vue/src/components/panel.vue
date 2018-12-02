<template>
  <div class="panel">
    <div class="panel-header">
      <div class="panel-title">
        <slot name="title">{{title}}</slot>
      </div>
      <div class="panel-description">
        <slot name="description">{{description}}</slot>
      </div>
      <div class="panel-btn" v-on:click="toggle()" v-bind:style="[open?{transform: rotateBtn}:{}]"></div>
    </div>
    <div class="panel-body" v-bind:style="[open?{transform:activeBody,opacity:1}:{transform:errorBody,opacity:0,maxHeight:0}]">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        title:"ssss",
        description:"zxxxx",
        open:false,
        rotateBtn:'rotate(180deg)',
        activeBody:'scaleY(1)',
        errorBody:'scaleY(0)',
      }
    },
    computed:{
      /* transitionBtn:{
        get:function () {
          return this.data.open;
        },
        set:function () {
          return this.data.open=!this.data.open;
        }
      }, */
      //transitionBtn:function () {
        //return this.open.get?'transform: rotate(180deg)':'';
      //}
      transitionBtn:function(){
        return {
          active:this.open,
          //'x':'transform: rotate(180deg)',
          }
      }
    },
    methods:{
      toggle:function () {
        console.log(this.open);
        return this.open=!this.open;
      }
    }
  }
</script>
<style>
  .panel{
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 2px;
  }
  .panel-header{
    overflow: hidden;
  }
  .panel-title{
    float: left;
  }
  .panel-description{
    float: left;
  }
  .panel-btn{
    position: relative;
    float: right;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    transition: all 0.5s;
  }
  .panel-btn:hover{
    background: #ebebeb;
  }
  .panel-btn::after{
    position: absolute;
    top: 10px;
    left: 12px;
    content: '';
    width: 10px;
    height: 10px;
    border-left: 2px solid #333;
    border-bottom: 2px solid #333;
    transform: rotate(-45deg);
  }
  .panel-title{
    line-height: 36px;
    font-size: 20px;
    font-weight: bolder;
    padding: 0 10px;
  }
  .panel-description{
    line-height: 36px;
    font-size: 14px;
    color: #aaa;
    padding: 0 10px;
  }
  .panel-body{
    transition: all 0.5s;
    overflow-y: hidden;
    transform-origin: top left;
  }
</style>
