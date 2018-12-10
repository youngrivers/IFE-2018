<template>
  <div>
    <cascader 
    v-bind:options="options"
    v-model="selectedOptions"
    v-on:change="handleChange"
    >
      <span>默认 click 触发子菜单</span>
    </cascader>
  </div>
</template>
<script>
import cascader from './components/CascaderComponent.vue'
  export default{
    data(){
      return{
        show:true,
        options:[{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
                value: 'yizhi',
                label: '一致'
            }, {
                value: 'fankui',
                label: '反馈'
            }, {
                value: 'xiaolv',
                label: '效率'
            }, {
                value: 'kekong',
                label: '可控'
            }]
          },{
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        },{
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions:[],
      }
    },
    components:{
      cascader
    },
    methods:{
      handleChange(value){
        console.log(value);
      }
    }
  }
</script>
<style>

</style>
