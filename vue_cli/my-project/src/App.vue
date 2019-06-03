<template>
  <div id="app">
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view> <!-- 需要缓存 -->
      </keep-alive>
    </transition>
    <transition name="fadeIn">
      <router-view v-if="!$route.meta.keepAlive"></router-view> <!-- 不需要缓存 -->
    </transition>
    <Tab></Tab>
  </div>

</template>

<script>
  import Tab from './base/Tab';
  import '../node_modules/bootstrap/dist/css/bootstrap.css'

  export default {
    name: 'App',
    components: {Tab},

  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box ;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, button {
    appearance: none;
  }

  .content {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 75px;
    padding: 40px 0 75px;
    width: 100%;
    overflow: auto;
  }

  .fr {
    float: right;
  }

  .fl {
    float: left;
  }
  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active{
    transition: all 0.1s linear;
    opacity: 1;
  }
  .fadeIn-leave-active{
    transition: all 0.1s linear;
    opacity: 0;
  }
</style>
