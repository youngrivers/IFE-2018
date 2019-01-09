<template>
  <div>
    <input
    type="text"
    value=""
    class="input-value">
    <span class="input-suffix">📅</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>
<style>
  .input-value{
    padding: 0 30px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
  .input-suffix{
    position: absolute;
    left: 5px;
    text-align: center;
  }
</style>