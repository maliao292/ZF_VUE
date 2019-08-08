<template>
  <div>
    <h1>C1</h1>
    <router-link to="/collect/collect2">collect2</router-link>
    <div>{{msg}}</div>

    <ul>
      <transition
        v-for="(val, key, index) in list"
        :duration="1000"
        name="liin"
        :key="index"
      >
        <li :data-val="getRandomNum()">{{val}}</li>
      </transition>
    </ul>

    <input type="text" @input="pushList" placeholder="输入" v-model="putval" />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      putval: "",
      msg: 666,
      list: [1, 2, 3, 4]
    };
  },
  methods: {
    pushList(e) {
      this.list.push(this.putval);
      if (this.list.length > 4) {
        setTimeout(() => {
          this.list.splice(0, 1);
        }, 2000);
      }
      console.log(this.list);
    },
    getRandomNum() {
      var min = 1; //这里改成你需要的最小值
      var max = 100; //这里改成你需要的最大值
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
};
</script>

<style scoped>
.liin-enter-active,
.liin-leave-active {
  transition: opacity 0.5s;
}
.liin-enter, .liin-leave-to/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
