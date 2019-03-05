<template>
  <div>
    <Mheader :isshow="true">首页</Mheader>
    <div class="content">
      <Swiper :swiperSlides = 'slides'></Swiper>
      <ul class="hotbook">
        <li v-for="(hot,ind) in hotBooks" :key="ind">
          <img :src="hot.bookCover" alt="">
          <p v-text="hot.bookName"></p>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import Mheader from '../base/Mheader';
  import Swiper from '../base/Swiper';
  import {getSlider,getHotBook} from "../api";

  export default {
   created(){
      // 获取轮播图
     this.getSliders();
     this.getHot();
    },
    data(){
      return {
        slides:[], // 轮播图
        hotBooks:[]  // 最新图说
      }
    },
    methods:{
      async getSliders(){
        this.slides = await getSlider();
      },
      async getHot(){
        this.hotBooks = await getHotBook();
      }
    },
    components: {
      Mheader, Swiper
    },

  }
</script>

<style scoped>
  .hotbook{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .hotbook li{
    width: 30%;
  }
  .hotbook li img{
    width: 100%;
  }
  .hotbook li p{
    text-align: center;
  }
</style>
