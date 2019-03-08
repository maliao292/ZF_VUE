<template>
  <div>
    <Mheader :isshow="false">首页</Mheader>
    <div class="content">
      <div v-if="loading"><Loading></Loading></div>
      <template v-else="loading">
        <Swiper :swiperSlides='slides'></Swiper>
        <ul class="hotbook">
          <li v-for="(hot,ind) in hotBooks" :key="ind">
            <img :src="hot.bookCover" alt="">
            <p v-text="hot.bookName"></p>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>
<script>
  import Mheader from '../base/Mheader';
  import Loading from '../base/Loading';
  import Swiper from '../base/Swiper';
  import {getAll} from "../api";

  export default {
    created() {
      // 获取轮播图
      this.getdata();
    },
    data() {
      return {
        loading:true,
        slides: [], // 轮播图
        hotBooks: []  // 最新图说
      }
    },
    methods: {
      async getdata() {
        let [sliders, hotBooks] = await getAll();
   /*     getAll().then(function(res){
          console.log(res);
        });*/
        this.slides = sliders;
        this.hotBooks = hotBooks;
        setTimeout(()=>{this.loading=false;},1000);

      },

    },
    components: {
      Mheader, Swiper,Loading
    },

  }
</script>

<style scoped>
  .hotbook {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .hotbook li {
    width: 30%;
  }

  .hotbook li img {
    width: 100%;
  }

  .hotbook li p {
    text-align: center;
  }
</style>
