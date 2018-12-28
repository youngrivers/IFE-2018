<template>
  <div class="cascader">
    <slot></slot>
    <!-- <span style="display:block">{{selectedOption}}</span> -->
    <!-- <span style="display:block">{{menus[0]}}</span> -->
    <div class="panel" v-bind:class="[open?panelColor:'']">
      <div class="panel-header">
        <div class="panel-title">
          <span>{{displayValue?displayValue:'请选择'}}</span>
        </div>
        <div class="panel-btn" v-on:click="toggle()" v-bind:style="[open?{transform: rotateBtn}:{}]"></div>
      </div>
    </div>
    <!-- <div v-for="option in options" v-bind:key="option.id" v-if="open">
      <span>{{option.label}}</span>
      <CascaderContents v-bind:children="option.children" v-if="option.children"></CascaderContents>
      <span>{{option.children}}</span>
    </div> -->
    <div v-if="open" class="selector-box" name="box"
    >
        <div class="selector-wrapper">
          <ul class="selector"
          :value="selected"
          v-for="(menu,index) in menus" v-bind:key="menu.id"
          >
            <li
            :value="option.value"
            v-for="(option) in menu" v-bind:key="option.id"
            @click="changeOption(index,option,$event)"
            :class="[hasChildren?'has-children':'',option.value===values?'active':'']"
            >
              {{option.label}}
            </li>
          </ul>
          <!-- <CascaderContents v-if="hasChildren" v-bind:options="childrenOptions" v-model="childrenSelectedOptions"></CascaderContents> -->
        </div>
    </div>
  </div>
</template>
<script>
//import CascaderContents from "./CascaderContents.vue";
const prefixCls='i-cascader';
  export default{
    name:'Cascader',
    /* model:{
      prop:'value',
      event:'change'
    }, */
    props:{
      options:{
        type:Array
      },
      selected:{
        type:[String,Number,Array]
      },
      //向上传递的value
      defaultValue:{
        type:Array
      },
      //向上传递的渲染
      displayRender:{
        type:Function,
        //label添加‘/’
        default(label){
          return label.join('/')
        }
      },
      value:{
        type:Array
      }
    },
    /* model:{
      prop:'value',
      event:'handleChange',
    }, */
    data(){
      return{
        values:'',
        open:false,
        hasChildren:false,
        //存放value
        selectedOption:[],
        //selectedValue:[],
        //input输出的value
        displayValue:'',
        //childrenOptions:[],
        //childrenSelectedOptions:[],
        //旋转参数
        rotateBtn:'rotate(180deg)',
        //class类名
        panelColor:'panel-box',
        //存放父数据
        menus:[],
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
        //console.log(this.open);
        //value=this.open;
        return this.open=!this.open;
      },
      //选定的value
      selectedValue(option){
        let that=this
        return that.selectedOption.map((option)=>{
          return option.value;
        })
      },
      //选定的label
      selectedLabel(option){
        let that=this
        return that.selectedOption.map((option)=>{
          return option.label
        })
      },
      scope(){
        //this.selectedOptions=options.label;
        console.log('---first created!---');
        
      },
      changeValue(){
        //console.log(value);
        console.log('change!');        
      },
      //把数组label返回成字符串
      changeLabel(arr){
        return arr.join('/')
      },
      //把数组返回成另一个数组
      changeArr(arr){
        return arr.forEach((i)=>{
          /* let option=arr[i].filter((option)=>{
            return option.value===value;
          }) */
          let option=arr[i]
        })
      },
      changeOption(index,option,$event){
        let that=this
        let menus=that.menus.slice(0,index+1);
        if (option.disabled) {
          return
        }
        //selectedOption存放了options
        that.selectedOption=that.selectedOption.slice(0,index+1);
        that.selectedOption[index]=option
        //that.selectedValue=option.value
        //判断是否有->子
        if (option.children) {
          //this.hasChildren=!this.hasChildren;
          menus.push(option.children);
          //this.hasChildren=true;
          //this.childrenSelectedOptions=option.label;
          //this.$set(this.hasChildren,index,true);
          //this.$set(this.childrenOptions,index,option.children);
          //this.childrenOptions=option.children;
        }else{
          //that.displayValue=that.displayRender(that.selectedLabel);
          //that.displayValue=that.displayRender(that.selectedLabel(option));
          that.displayValue=that.changeLabel(that.selectedLabel(option));
          // 有事件来的才触发自定义事件，使用defaultValue填充的不触发
          if ($event) {
            //$event.target.value    
            //this.$emit('change',value);
            //that.$emit('change',that.selectedValue,that.selectedOption);
            //that.$emit('change',that.changeArr(that.selectedOption));
            that.$emit('change',that.selectedValue(option));
          }
          that.show=false;
        }
        //this.selectedOptions=option.value;
        //value=option.label;
        that.menus=menus;

        //console.log(option.value);
        //console.log(that.selectedOption[1].value);
      }
    },
    /* components:{
      CascaderContents
    }, */
    created() {
      let that=this
      //copy数据给menus[0]
      that.scope();
      that.menus[0]=[];
      //把options传递给menus[0]
      that.options.forEach((option,i) => {
        that.menus[0].push({
          value:option.value,
          label:option.label,
          children:option.children,
        })
      });
      //判断内定value，并传递
      /* if (this.defaultValue) {
        console.log('have!!!!!!!');
        this.defaultValue.forEach((value,i)=>{
          //将value进行选择传递
          let option=this.menus[i].filters((option) => {
            return option.value===value
          });
          //传递
          this.changeOption(i,option[0])
        })
      } */
      if (that.value) {
        that.value.forEach((value,i)=>{
          let option=that.menus[i].filter((option) => {
            return option.value===value
          });
          that.changeOption(i,option[0])
        })
      }
    },
  }
</script>
<style>
  .cascader{
    font-size: 14px;
    color: #666
  }
  .panel{
    width: 288px;
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
  .selector-box{
    top: 256px;
    left: 0;
    height: 140px;
    display: flex;
    flex-wrap: nowrap;
    filter: drop-shadow(0 0 2px rgba(black, .2));
    transform-origin: 50% 0;
  }
  .selector-box::before{
    content: "";
    display: block;
    left: 20px;
    top: -6px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 6px solid #fff;
  }
  .selector-box::before{
    position: absolute;
    z-index: 1;
  }
    .selector-wrapper {
    display: flex;
    flex-wrap: nowrap;
    width: auto;
    height: 200px;
  }
  .selector{
    display: inline-block;
    width: auto;
    height: 200px;
  }
  .selector-wrapper .selector{
    border: 1px solid #666;
  }
  .selector li{
    padding: 10px 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    position: relative;
    z-index: 1;
    padding-right: 50px;
  }
  .selector li::after{
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    margin: auto;
    content: '';
    width: 8px;
    height: 8px;
    border-left: 1px solid #666;
    border-bottom: 1px solid #666;
    transform: rotate(-135deg);
  }
  .has-children{
    color: #45a1ff;
  }
</style>
