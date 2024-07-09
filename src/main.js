//import './assets/main.css'
//引入router 
import router from './vouter/index.js';
//引入ant-design-vue组件  npm install ant-design-vue --save  UI组件
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { createApp } from 'vue'
import App from './App.vue'
// main.js 或类似文件  

var app=createApp(App)
app.use(router).use(Antd)
app.mount('#app')
