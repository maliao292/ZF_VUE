<template>
  <div class="content">
    <div class="cover">
      <Mheader :isshow="true">列表详情</Mheader>
      <ul>
        <li>
          <div class="row">
            <div class="<!--col-xs-offset-3 -->col-xs-12 col-md-3">
              <a href="#" class="thumbnail" >
                <img :src="book.bookCover">
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="input-group">
            <label class="input-group-addon" for="bookName">书名称</label>
            <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2"
                   id="bookName" v-model="book.bookName">
          </div>
        </li>
        <li>
          <div class="input-group">
            <label class="input-group-addon" for="bookInfo">书信息</label>
            <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2"
                   id="bookInfo" v-model="book.bookInfo">
          </div>
        </li>
        <li>
          <div class="input-group">
            <label class="input-group-addon" for="bookPrice">书价格</label>
            <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2"
                   id="bookPrice" v-model="book.bookPrice">
          </div>
        </li>
        <li>
          <button style="margin-top: 15px" type="button" class="btn btn-primary btn-lg btn-block" @click="updata">确认修改</button>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import Mheader from '../base/Mheader';
  import {findOneBook, updataBook} from "../api";

  export default {
    name: "home",
    data() {
      return {book: {}}
    },
    created() {
      this.getBook(this.bid);
      var _self = this;
      document.onkeydown = function(e){
        var key = window.event.keyCode;
        if(key == 13){
          _self.updata();
        }
      }
    },
    methods: {
      async updata(){
        await updataBook(this.bid,this.book);
        this.$router.push('/list');
      },
      async getBook(bid) {
        if(await findOneBook(bid))  this.book = await findOneBook(bid);
        else this.$router.push('/list');
      }
    },
    computed: {
      bid() {
        return this.$route.query.bid
      }
    },
    watch:{
      $route(){
        this.getBook(this.bid);
      }
    },
    components: {
      Mheader
    }
  }
</script>

<style scoped>
  .cover {
    position: fixed;
    top: 40px;
    left: 0;
    bottom: 0;
    background: #fff;
    z-index: 1000;
    padding: 15px;
  }
</style>
