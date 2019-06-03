<template>
  <div class="content">
    <Mheader :isshow="false">添加</Mheader>
    <ul>
      <li>
        <div class="row">
          <div class="<!--col-xs-offset-3 -->col-xs-12 col-md-3">
            <a href="#" class="thumbnail">
              <img :src="book.bookCover">

            </a>
          </div>
        </div>
      </li>
      <li>
        <div class="input-group">
          <label class="input-group-addon" for="bookName">书名称</label>
          <input type="text" class="form-control" placeholder="请输入书名称" aria-describedby="sizing-addon2"
                 id="bookName" v-model="book.bookName">
        </div>
      </li>
      <li>
        <div class="input-group">
          <label class="input-group-addon" for="bookInfo">书信息</label>
          <input type="text" class="form-control" placeholder="请输入书信息" aria-describedby="sizing-addon2"
                 id="bookInfo" v-model="book.bookInfo">
        </div>
      </li>
      <li>
        <div class="input-group">
          <label class="input-group-addon" for="bookPrice">书价格</label>
          <input type="text" class="form-control" placeholder="请输入书价格" aria-describedby="sizing-addon2"
                 id="bookPrice" v-model="book.bookPrice">
        </div>
      </li>
      <li>
        <div class="input-group">
          <label class="input-group-addon" for="bookCover">书封面</label>
          <input type="text" class="form-control" placeholder="请粘贴书封面" aria-describedby="sizing-addon2"
                 id="bookCover" v-model="book.bookCover">
        </div>
      </li>
      <li>
        <button style="margin-top: 15px" type="button" class="btn btn-primary btn-lg btn-block" @click="add">确认添加
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  import Mheader from '../base/Mheader';
  import {addBook} from "../api";

  export default {
    name: "home",
    data() {
      return {
        book: {
          bookCover: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2992064670,200322147&fm=173&app=25&f=JPEG?w=218&h=146&s=655019C64008BF5F445904B703001002'
        },
      }
    },
    created() {
      var _self = this;
      document.onkeydown = function (e) {
        var key = window.event.keyCode;
        if (key == 13) {
          // _self.updata();
        }
      }
    },
    methods: {
      async add() {
        await addBook(this.book);
        this.$router.push('/list')
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
