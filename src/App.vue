<template>
    <div>
        <router-link to="/list">列表</router-link>
        <router-link to="/home">首页</router-link>
        <router-view val="5"></router-view>
        <button @click="show">notify</button>
    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                msg: 'HELLO'
            }
        },
        methods: {
            show() {
                this.$notify();
            }
        }
    }
</script>

<style scoped>

</style>