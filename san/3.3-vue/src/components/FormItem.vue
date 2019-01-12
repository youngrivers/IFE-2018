<template>
  <div class="ui-form">
    <label for="" class="ui-form-wrap">
      <span>*</span>
      {{label}}
    </label>
    <div class="ui-form-input">
      <slot></slot>
      <div class="ui-form-message">
        {{error}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    label:String,
    prop:String,
    error:String,
    rules:[Object, Array],
    required:{
      type: Boolean,
      default: undefined
    }
  },
  data() {
    return {
    }
  },
  methods: {
    //验证函数
    validate(){

    }
  },
}
</script>
<style scoped>
.ui-form-wrap{
  display: inline-block;
  overflow: hidden;
}
.ui-form-wrap span{
  color: red;
}
.ui-form-input{
  position: relative;
  display: block;
  width: 66.7%;
}
</style>
