<template>
  <div>
    <div class="swiper">
    <mt-swipe :auto="0" :show-indicators="false">
          <mt-swipe-item><img src="../../assets/img/c.png" alt=""></mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    </div>
    <div class="grid">
      <ul>
        <li><div>1</div><span>新闻资讯</span></li>
        <li><div>2</div><span>图文分享</span></li>
        <li><div>3</div><span>商品展示</span></li>
        <li><div>4</div><span>留言反馈</span></li>
        <li><div>5</div><span>搜索资讯</span></li>
        <li><div>6</div><span>联系我们</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style scoped>
  .swiper{
    height: 200px;
  }
  .grid ul{ 
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .grid ul li {
      width: 33%;
      text-align: center;
      padding-bottom: 15px
  }
  .grid ul li div{
    width: 50px;
    height: 50px;
    line-height: 50px;
    background: #f56;
    margin: 0 auto;
    border-radius: 25px;
    color: #fff;
  }
  .grid ul li span{
    font-size: 14px;
  }
</style>
