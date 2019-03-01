<template>
  <div>
    <Mheader :isshow="true">首页</Mheader>
    <div class="content">
      <Swiper></Swiper>
    </div>
  </div>

</template>

<script>
  import Mheader from '../base/Mheader';
  import Swiper from '../base/Swiper';
  export default {
    components: {
      Mheader,Swiper
    },

  }
</script>

<style scoped>
</style>
