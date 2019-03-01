<template>
  <div class="menu">
    <router-link to="/home" tag="div">
      <span class="icon iconfont">&#xe61d;</span>
      <div class="name">首页</div>
    </router-link>
    <router-link to="/list" tag="div">
      <span class="icon iconfont">&#xe600;</span>
      <div class="name">列表</div>
    </router-link>
    <router-link to="/collect" tag="div">
      <span class="icon iconfont">&#xe608;</span>
      <div class="name">收藏</div>
    </router-link>
    <router-link to="/add" tag="div">
      <span class="icon iconfont">&#xe67d;</span>
      <div class="name">添加</div>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "Tab"
    }
</script>

<style scoped lang="less">
  .menu{
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 15px 0;
    background: #fff;
    z-index: 10;
    div{
      cursor: pointer;
    }
  }
  .router-link-active{
    color:blueviolet;
  }
</style>
