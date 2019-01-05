<template>
  <div
  :class="[prefixCls+'-box']"
  >
    <div
    :class="[prefixCls+'-header']"
    ><!-- 日历头 -->
      <span class="year-minus-btn"></span><!-- 上年 -->
      <span class="month-minus-btn"></span><!-- 上月 -->
      <span>年</span><!-- 年 -->
      <span>月</span><!-- 月 -->
      <span class="month-plus-btn"></span><!-- 下月 -->
      <span class="year-plus-btn"></span><!-- 下年 -->
    </div>
    <div><!-- week！ -->
      <span
      v-for="week in weekText" :key="week.id"
      >{{week}}</span>
    </div>
    <div><!-- 日历content -->
      <table>
        <tbody><!-- 表内 -->
          <tr>
            <td><div><span></span></div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
//let prefixCls='calendar';
export default {
  data() {
    return {
      prefixCls:'calendar',
      weekText:['日', '一', '二', '三', '四', '五', '六'],
      dadeList:[],//显示的42天日历
      currentYear:1970,
      currentMonth:1,
      currentWeek:1,
      currentDay:1,
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
      let str=formatDate(this.currentYear,this.currentMonth,this.currentDay);
      if (this.currentWeek===0) {
        this.currentWeek=7;
      }
    },
    formatDate(year,month,day){
      if (month<10) {
        month="0"+month;
      }
      if (day<10) {
        day="0"+day;
      }
      return year+"-"+month+"-"+day
    }
  },
}
</script>
<style>
  .calendar-box{
    width: 340px;
    background: #fff;
  }
  .calendar-header{
    display: flex;
    text-align: center;
  }
  .year-minus-btn,.month-minus-btn,.month-plus-btn,.year-plus-btn{
    width: 24px;
    height: 24px;
    padding: 0 5px;
    cursor: pointer;
  }
  .year-minus-btn:before,.month-minus-btn:before,.month-plus-btn:before,.year-plus-btn:before{
    position: absolute;
    display: block;
    content: "";
    width: 16px;
    height: 16px;
  }
  .month-plus-btn:before,.year-plus-btn:before{
    transform: rotate(180deg);
  }
  .year-minus-btn:before,.year-plus-btn:before{
    background: url(../assets/doubleLeft.svg);
    background-size: 100%,100%;
  }
  .month-minus-btn:before,.month-plus-btn:before{
    background: url(../assets/left.svg);
    background-size: 100%,100%;
  }
</style>