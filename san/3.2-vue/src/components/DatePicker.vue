<template>
  <div>
    <!-- 触发器 -->
    <div slot="trigger">
      <v-input></v-input>
    </div>
    <!-- 弹出 -->
    <div slot="popup">
      <Calendar></Calendar>
    </div>
  </div>
</template>
<script>
import input from './Input.vue'
import Calendar from './Calendar.vue'
export default {
  data() {
    return {
      
    }
  },
  components:{
    VInput:input,
    Calendar:Calendar,
  }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>