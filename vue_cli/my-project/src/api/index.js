import axios from 'axios';
// 增加默认的请求的 url；
axios.defaults.baseURL = 'http://localhost:3000';

// 获取轮播图数据 ,返回的是一个promise 对象
export let getSlider = ()=>{
  return axios.get('/sliders');
};

