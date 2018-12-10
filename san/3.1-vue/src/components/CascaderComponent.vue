<template>
  <div class="cascader">
    <slot></slot>
    <div class="panel" v-bind:class="[open?panelColor:'']">
      <div class="panel-header">
        <div class="panel-title">
          <span>{{value?value:'请选择'}}</span>
        </div>
        <div class="panel-btn" v-on:click="toggle()" v-bind:style="[open?{transform: rotateBtn}:{}]"></div>
      </div>
    </div>
    <!-- <div v-for="option in options" v-bind:key="option.id" v-if="open">
      <span>{{option.label}}</span>
      <CascaderContents v-bind:children="option.children" v-if="option.children"></CascaderContents>
      <span>{{option.children}}</span>
    </div> -->
    <div v-if="open">
      <CascaderContents v-bind:options="options" v-model="selectedOptions"></CascaderContents>
    </div>
  </div>
</template>
<script>
import CascaderContents from "./CascaderContents.vue";
  export default{
    props:['options','value'],
    data(){
      return{
        description:"zxxxx",
        open:false,
        //value:'',
        selectedOptions:[],
        rotateBtn:'rotate(180deg)',
        panelColor:'panel-box',
      }
    },
    /* beforeCreate() {
      console.log('beforecreate');
      this.$options.components.CascaderContents=require('./CascaderContents.vue').default
    }, */
    computed:{
      transitionBtn:function(){
        return {
          active:this.open
          }
      },
      panserColor:function () {
        if (this.open) {
          return panel-box
        }
      }
    },
    methods:{
      toggle:function () {
        console.log(this.open);
        //value=this.open;
        return this.open=!this.open;
      },
      scope(){
        //this.selectedOptions=options.label;
        console.log('sss');
        
      }
    },
    components:{
      CascaderContents
    },
    created() {
      this.scope()
    },
  }
</script>
<style>
  .cascader{
    font-size: 14px;
    color: #666
  }
  .panel{
    width: 228px;
    height: 38px;
    padding-left: 10px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    cursor: pointer;
  }
  .panel-box{
    border-color: aqua;
  }
  .panel-header{
    overflow: hidden;
  }
  .panel-title{
    float: left;
  }
  .panel-title{
    line-height: 38px;
    padding: 0 10px;
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
    border-left: 2px solid #666;
    border-bottom: 2px solid #666;
    transform: rotate(-45deg);
  }
</style>
