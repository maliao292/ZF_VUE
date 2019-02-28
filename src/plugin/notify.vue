<template>
    <div>
        <div class="notify">{{msg}}</div>
    </div>
</template>

<script>
    export default {
        data(){
            return {msg:'hello'}
        }
    }
</script>
<style scoped>
    .notify{
        width: 100px;
        height: 40px;
        line-height: 40px;
        background: #ccc;
        border-radius: 15px;
        text-align: center;
        color: #fff;
    }
</style>