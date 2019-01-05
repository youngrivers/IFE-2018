<template>
  <div>
    <div>
      <span>日期选择(type='date')</span>
      <Datepicker
      v-model="value1"
      ></Datepicker>
    </div>
    <div>
      <span>日期范围选择(type='date-range')</span>
      <Datepicker
      v-model="value2"
      ></Datepicker>
    </div>
  </div>
</template>
<script>
import Datepicker from './components/DatePicker.vue'
  export default{
    data(){
      return{
        show:true,
        value1:'',
        value2:'',
      }
    },
    components:{
      Datepicker
    }
  }
</script>
<style>
bady{
  margin: 0;
  padding: 0;
}
</style>
