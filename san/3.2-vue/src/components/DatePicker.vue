<template>
  <div>
    <!-- 触发器 -->
    <div slot="trigger">
      <v-input></v-input>
    </div>
    <!-- 弹出 -->
    <div slot="popup">
      <Calendar
      :value="curDate"
      @change="onChange"
      ></Calendar>
    </div>
  </div>
</template>
<script>
import input from './Input.vue'
import Calendar from './Calendar.vue'
export default {
  data() {
    return {
      curDate:new Date('2019-01-01')
    }
  },
  components:{
    VInput:input,
    Calendar:Calendar,
  },
  methods: {
    onChange(dateStr, date){
      console.log(arguments);
    }
  },
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>