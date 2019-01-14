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
import "../utils/FormItem.css"
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

    },
    resetField(){

    }
  },
}
</script>
<style scoped>

</style>
