<template>
    <div class="grid">
      <li>
        <slot></slot>
        
    </div>
</template>

<script>
export default {
   name:'my-ul',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style scoped>
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
