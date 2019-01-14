<template>
  <div>
    <input type="text">
  </div>
</template>
<script>
export default {
  props:{
    value: [String, Number],
    disabled: Boolean,
    type: {
      type: String,
      default: 'text'
    },
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>