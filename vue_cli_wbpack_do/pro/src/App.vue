<template>
  <div id="app">
    <mt-header fixed title="信息管理系统"></mt-header>
    <router-view />
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/img/j.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/img/c.png" />
        会员
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img slot="icon" src="./assets/img/h.png" />
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/img/s.png" />
        发现
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: '我是App',
      selected: 'home'
    }
  },
  watch: {
    selected (newval, oldval) {
      this.$router.push({name: newval})
    }
  }
}
</script>

<style>
#app{
  padding-top: 40px
}
</style>
