<template>
      <li>
        <slot></slot>
      </li>
</template>

<script>
export default {
  name: 'my-li',
  data () {
    return {
      msg: '18626285666'
    }
  }
}
</script>
<style scoped>
  li {
      width: 33%;
      text-align: center;
      padding-bottom: 15px
  }
  li div{
    width: 50px;
    height: 50px;
    line-height: 50px;
    background: #f56;
    margin: 0 auto;
    border-radius: 25px;
    color: #fff;
  }
  li span{
    font-size: 14px;
  }
</style>
