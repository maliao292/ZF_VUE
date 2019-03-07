<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,key) in swiperSlides" :key="key">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>

  export default {
    name: 'carousel',
    props: ['swiperSlides'],
    data() {
      return {
        swiperOption: {
          // direction: 'vertical',
          autoplay: 3500,
          loop:true,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
        },
      }
    }
  }
</script>
<style scoped>
  img{
    width: 100%;
  }
</style>
