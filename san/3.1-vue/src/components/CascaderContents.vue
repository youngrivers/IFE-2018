<template>
  <ul>
    <li v-for="(option,index) in options" v-bind:key="index" v-on:click="handleClick(option,index)">
      <!-- <span>child</span> -->
      <!-- <cascader v-if="child.children" v-bind:options="child"></cascader> -->
      <span>{{option.label}}</span>
      <CascaderContents v-if="hasChildren" v-bind:options="childrenOptions" v-model="childrenSelectedOptions"></CascaderContents>
    </li>
  </ul>
</template>
<script>
import cascader from './CascaderComponent.vue'
  export default{
    name:'CascaderContents',
    props:['options','value'],
    data(){
      return{
        hasChildren:false,
        selectedOptions:[],
        childrenOptions:[],
        childrenSelectedOptions:[],
      }
    },
    computed:{

    },
    components:{
      cascader
    },
    methods:{
      handleClick(option,index){
        if (option.children) {
          //this.hasChildren=!this.hasChildren;
          console.log(index);
          
          this.hasChildren=true;
          this.childrenSelectedOptions=option.label;
          //this.$set(this.hasChildren,index,true);
          //this.$set(this.childrenOptions,index,option.children);
          this.childrenOptions=option.children;
        }
        this.selectedOptions=option.value;
      }
    }
  }
</script>
<style>

</style>
