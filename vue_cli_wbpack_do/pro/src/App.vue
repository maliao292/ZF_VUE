<template>
  <div id="app">
    <mt-header fixed title="信息管理系统"></mt-header>
    {{msg}}
    <router-view />
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src='./assets/img/j.png'/>
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src='./assets/img/c.png'/>
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src='./assets/img/h.png'/>
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src='./assets/img/s.png'/>
        我的
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
      selected: 'selected'
    }
  }
}
</script>

<style>
</style>
