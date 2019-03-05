<template>
  <div class="content">
    <Mheader :isshow="true">列表</Mheader>
    <ul class="hotbook">
      <li v-for="(book,ind) in books" :key="ind">
        <img :src="book.bookCover" alt="">
        <div>
          <h4 v-text="book.bookName"></h4>
          <p>{{book.bookInfo}}</p>
          <b>{{book.bookPrice}}</b>
          <button @click="remove(book.bookId)" class="btn btn-danger fr">删除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Mheader from '../base/Mheader';
  import {getBooks,removeBook} from "../api";
  export default {
    name: "home",
    created() {
      this.getData();
    },
    data() {
      return {
        books: []
      }
    },
    methods: {
      async remove(id){
        await removeBook(id);
      },
      async getData() {
        this.books = await getBooks();
      }
    },
    components: {
      Mheader
    }
  }
</script>

<style scoped>
  .hotbook {

  }

  .hotbook li {
    display: flex;
    margin-bottom: 10px;
    border-bottom: 1px solid #f1f1f1;
    padding: 0 15px;
  }

  .hotbook li img {
    width: 130px;
    height: 130px;
  }

  .hotbook li h4 {
    font-size: 20px;
    line-height: 25px;
  }

  .hotbook li p {
    color: #2a2a2a;
    line-height: 25px;
  }

  .hotbook li b {
    display: inline-block;
    color: #2a2a2a;
    line-height: 25px;
    width: 50px;
  }
  .hotbook li>div{
    width: 100%;
  }
</style>
