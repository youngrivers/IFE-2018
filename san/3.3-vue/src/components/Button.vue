<template>
  <button class="ui-button" @click="handleClick" :type="nativeType">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props:{

  },
  data() {
    return {
      type:{
        type: String,
        default: 'default'
      },
      nativeType:{
        type: String,
        default: 'button'
      }
    }
  },
  methods: {
    handleClick(evt){
      this.$emit('click',evt)
    }
  },
}
</script>
<style scoped>
.ui-button{
  display: inline-block;
  color: #fff;
  background-color: #409eff;
  padding: 12px 20px;
  border: 1px solid #dcdfe6;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}
.ui-button:active{
  background-color: #4590FA;
}
</style>
