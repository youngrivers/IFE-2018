
<template>
  <div class="performanceBox">
          <!-- 级联选择器多选 -->
          <choiceindex v-on:CheckedsIndexCodes="FromTreeCheckeds"></choiceindex>
  </div>
</template>
<script>
//引用上边创建的MultipleChoice文件夹下的index出口文件就好了。
import choiceindex from "./components/index.vue"; //级联选择多选 完成
export default {
  components: {
    choiceindex,
  },
  data() {
    return {
      SaveCascadeIndexCodes: [], //保存级联选择器多选的基准code
      SaveJiZhunParams: [], //保存业绩表现需要的参数

    };
  },
  methods: {
    //多选选择基准时的code
    FromTreeCheckeds(IndexCodes) {
//IndexCodes就是选中的item的数组，操作他就好了
      // console.log(IndexCodes);
      this.SaveCascadeIndexCodes = IndexCodes;
    },
  }
};
</script>
<style  rel="stylesheet/scss" lang="scss">
</style>