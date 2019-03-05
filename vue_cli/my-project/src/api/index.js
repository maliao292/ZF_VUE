import axios from 'axios';
// 增加默认的请求的 url；
axios.defaults.baseURL = 'http://localhost:3000';
axios.interceptors.response.use((res) => { // 统一拦截器 在这里同一拦截结果，把结果处理成res.data
  return res.data;
});
// 获取轮播图数据 ,返回的是一个promise 对象
export let getSlider = () => {
  return axios.get('/sliders');
};
// 获取热门图书列表
export let getHotBook = () => {
  return axios.get('/hot');
};
// 获取全部图书
export let getBooks = () => axios.get("/book");
// 删除某一部
export let removeBook = (id) => axios.delete(`/book?id=${id}`);
