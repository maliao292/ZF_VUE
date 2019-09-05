<template>
  <div id="app">
    <mt-header fixed title="信息管理系统"></mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img @click="changeHash" alt='home' slot="icon" src="./assets/img/j.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img @click="changeHash" alt='member' slot="icon" src="./assets/img/c.png" />
        会员
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img @click="changeHash" alt='shopcart' slot="icon" src="./assets/img/h.png" />
        购物车<mt-badge type="error" size="small">{{cartNum}}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="search">
        <img @click="changeHash" alt='search' slot="icon" src="./assets/img/s.png" />
        发现
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import EventBus from './EventBus.js';
export default {
  name: 'App',
  data () {
    return {
      msg: '我是App',
      selected: 'home',
      cartNum:4
    }
  },
  mounted(){},
  created(){
    let _this = this;
    EventBus.$on('addShopcart',function(data){
      _this.cartNum = data;
    })
  },
  methods: {
    changeHash (e) {
     this.$router.push({name: e.target.alt})
       
    }
  },
  watch: {

  }
}
</script>

<style>
#app{
  padding-top: 40px
}

.mint-tabbar{
  position: fixed;

}
</style>
