<template>
  <div>
    <div class="swiper">
      <mt-swipe :auto="0" :show-indicators="false">
        <mt-swipe-item>
          <img src="../../assets/img/c.png" alt />
        </mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="grid">
      <my-ul>
        <my-li v-for="(grid,inds) in grids" :key="inds">
          <router-link :to="grid.route">
            <span :class="grid.className"></span>
            <span>{{grid.title}}</span>
          </router-link>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '',
      grids: [
        { className: 'a', title: '新闻资讯', route: { name: 'news.list' } },
        { className: 'a', title: '图文分享', route: { name: 'news.list' } },
        { className: 'a', title: '留言反馈', route: { name: 'news.list' } },
        { className: 'a', title: '商品展示', route: { name: 'news.list' } },
        { className: 'a', title: '搜索资讯', route: { name: 'news.list' } },
        { className: 'a', title: '联系我们', route: { name: 'news.list' } }
      ]
    }
  }
}
</script>
<style scoped>
.swiper {
  height: 200px;
}
.grid ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.grid ul li {
  width: 33%;
  text-align: center;
  padding-bottom: 15px;
}
.grid ul li div {
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: #f56;
  margin: 0 auto;
  border-radius: 25px;
  color: #fff;
}
.grid ul li span {
  font-size: 14px;
}
</style>
