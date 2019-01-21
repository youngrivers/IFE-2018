<template>
  <div>
    <scroll></scroll>
  </div>
</template>
<script>
import InfiniteScroll from './components/InfiniteScroll.vue'
export default {
  data() {
    return {
      
    }
  },
  components:{
    'scroll':InfiniteScroll
  }
}
</script>