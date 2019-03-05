<template>
  <div id="app">
    <router-view/>
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
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  input,button{
    appearance: none;
  }
.content{
  padding: 40px 0 75px;
  width: 100%;
  overflow: auto;
}
  .fr{
    float: right;
  }
  .fl{
    float: left;
  }
</style>
