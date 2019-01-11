<template>
  <div :class="[prefixCls+'-box']">
    <div :class="[prefixCls+'-header']"><!-- 日历头 -->
      <span class="year-minus-btn" @click="preYear()"></span><!-- 上年 -->
      <span class="month-minus-btn" @click="preMonth()"></span><!-- 上月 -->
      <span>{{currentYear}}年</span><!-- 年 -->
      <span>{{currentMonth}}月</span><!-- 月 -->
      <span class="month-plus-btn"></span><!-- 下月 -->
      <span class="year-plus-btn"></span><!-- 下年 -->
    </div>

    <div :class="[prefixCls+'-content']"><!-- 日历content -->
      <table :class="[prefixCls+'-table']">
        <thead><!-- week！ -->
          <tr>
            <th v-for="week in weekText" :key="week.id" :class="[prefixCls+'-col-header']">
              <span>{{week}}</span>
            </th>
          </tr>
        </thead>
        <tbody ><!-- 表内 -->
          <tr role="row" >
            <td role="gridcell" v-for="(item,key) in dadeList" :key="key" @click="emitDate(key)" :class="{selected:isActive[key]}">
              <div :class="[prefixCls+'-data']" v-if="key<7">
                <span>{{item.day}}</span>
              </div>
            </td>
          </tr>
          <tr role="row">
            <td role="gridcell" v-for="(item,key) in dadeList" :key="key">
              <div :class="[prefixCls+'-data']" v-if="27<key&&key<35">
                <span>{{item.day}}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
//let prefixCls='calendar';
import "../utils/calendar.css"
export default {
  props:{
    value:{
      type:Date,
    },

  },
  data() {
    return {
      prefixCls:'calendar',
      weekText:['日', '一', '二', '三', '四', '五', '六'],
      dadeList:[],//显示的42天日历
      currentYear:1970,//当前年份
      currentMonth:1,//当前月份
      currentWeek:1,
      currentDay:1,
      isActive:[],//判断日期是否点击
      selectedD:false,
    }
  },
  created() {
    this.initDate();
  },
  methods: {
    initDate(){
      let date=new Date();
      this.currentYear=date.getFullYear();
      this.currentMonth=date.getMonth()+1;
      this.currentWeek=date.getDay();
      this.currentDay=date.getDate();
      if (this.currentWeek===0) {
        this.currentWeek=7;
      }
      let str=this.formatDate(this.currentYear,this.currentMonth,this.currentDay);
      //本周
      for (let i = this.currentWeek-1; i >=0; i--) {
        let d=new Date(str)
        d.setDate(d.getDate()-i-1)
        let dayO={};
        dayO.day=d.getDate();
        this.dadeList.push(dayO);
      }
      //其它周
      for (let i = 0; i < 42-this.currentDay; i++) {
        let d=new Date(str)
        d.setDate(d.getDate()+i)
        let dayO={};
        dayO.day=d.getDate();
        this.dadeList.push(dayO);
      }
    },
    formatDate(year,month,day){
      let y=year,
      m=month,
      d=day;
      if (month<10) {
        month="0"+month;
      }
      if (day<10) {
        day="0"+day;
      }
      return y+"-"+m+"-"+d
    },
    preYear(){
      console.log('上年');
      this.currentYear=this.currentYear--;
    },
    preMonth(){
      console.log('上月');
      this.currentMonth=this.currentMonth--;
    },
    emitDate(key){
      this.isActive.push(key);
      this.isActive[key]=!this.selectedD;
    }
  },
  watch: {
    
  },
}
</script>
