<template>
      <ul>
        <slot></slot>
    </ul>
</template>

<script>
export default {
  name: 'my-ul',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style scoped>
  ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
