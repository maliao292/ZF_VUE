<template>
    <div class="header">
      <span><slot></slot></span>
      <i @click="back" v-if="isshow" class="iconfont icon-fanhui back"></i>
    </div>
</template>

<script>
    export default {
        name: "Mheader",
        props:{
          isshow:{  // 返回键
            type:Boolean,
            default:false
          }
        },
      methods:{
          back(){
            this.$router.go(-1);
          }
      }
    }
</script>

<style scoped lang="less">
  .header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    background: #afd9ee;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: 700;
    .back{
      display: inline-block;
      float: left;
      padding-left: 15px;
    }
  }
</style>
