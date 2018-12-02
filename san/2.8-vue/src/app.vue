<template>
  <div>
    <!-- <p>{{this.data.items.title}}1</p> -->
    <div v-for="item in items" v-bind:key="item.id" class="alert alert-danger main">{{item. title}}</div>
    <panel
    class="expansion"
    title="PANEL"
    description="描述"
    >
      <p v-for="item in items" v-bind:key="item.id">{{item.content}}</p>
    </panel>
  </div>
</template>
<script>
import panel from './components/panel.vue'
  export default{
    data(){
      return{
        show:'qqqq',
        items:[{
          title:'panel',
          content:'panel是面板的意思。pw是电源开关，没有正负 。reset是重起，没有正负.HDD是硬盘动作指示灯，有正负，接反了不亮，调过来接即可。PWLED是电源指示灯，一般为绿色和白色，有正负，接反了不亮。 SPEAK是喇叭，有正负，接反了不报警。',
        }],
      }
    },
    created() {
      console.log("创建");
    },
    mounted() {
      console.log("安装");
    },
    updated() {
      console.log("升级");
    },
    destroyed() {
      console.log("毁灭");
    },
    methods:{
      
    },
    components:{
      panel
    }
  }
</script>
<style>
.main{
  text-align: center;
}
.expansion{
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>