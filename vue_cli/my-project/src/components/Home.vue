<template>
  <div>
    <Mheader :isshow="true">首页</Mheader>
    <div class="content">
      <Swiper :swiperSlides = 'slides'></Swiper>
    </div>
  </div>

</template>

<script>
  import Mheader from '../base/Mheader';
  import Swiper from '../base/Swiper';
  import {getSlider} from "../api";

  export default {
   async created(){
      let {data:slides} = await getSlider();
      this.slides = slides;
    },
    data(){
      return {
        slides:[],
      }
    },
    components: {
      Mheader, Swiper
    },

  }
</script>

<style scoped>
</style>
