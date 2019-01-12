<template>
  <form class="ui-form">
    <slot></slot>
  </form>
</template>
<script>
export default {
  props:{
    model:Object,
    rules: Object,
  },
  data() {
    return {
    }
  },
}
</script>
<style scoped>
.ui-form{
  display: block;
  max-width: 600px;
  font-size: 14px;
}
</style>
