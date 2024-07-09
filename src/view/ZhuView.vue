<script setup>
import Carousall from './main/Carousall.vue';
import HotView from './main/HotView.vue';
import SuShan from './main/SuShan.vue';
import SuShui from './main/SuShui.vue';
import SuZhen from './main/SuZhen.vue';
</script>
<template>
<div class="body">
<Carousall />
<h1 ref="qwerty">热门景点</h1>
<HotView />
<h1>蘓·水</h1>
<SuShan />
<h1>蘓·山</h1>
<SuShui />
<h1>蘓·镇</h1>
<SuZhen />
<h1>现代风貌</h1>
<div class="xiandai">
  <router-link to="/main/xiandai">现代街市</router-link>
  <router-link to="/main/chengshi">城市特色</router-link>
</div>
<div class="xiandai1">
  <router-view></router-view>
</div>
<div class="footer">~苏州欢迎您~</div>
 <a-back-top />  <!--UI组件  返回顶部 -->
</div>
</template>
<style scoped>
.body{
  background-color: #93bcb049;
}
h1{
  color: #0b654c;
  font-size: 45px;
  font-weight: 500;
  margin: 30px;
  text-align: center;
} 
.xiandai{
    width: 1150px;
    padding-left: 30px;
    margin-left: 185px;
    margin-top: -10px;
    display: flex;
    align-items: center;
    box-shadow: 2px 6px 5px -7px rgba(0, 0, 0, 0.399);
}
.xiandai a{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color:#0b654c;
    margin-right: 10px;
    width: 150px; 
    height: 50px; 
    font-size: 22px;
    letter-spacing:1px;
    border-top: 1px solid transparent ;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    border-bottom: 2px solid transparent;/* 始终有一个透明的底部边框 */
}
.xiandai a:hover {  
  border-bottom-color:  #0b795a;
}
.xiandai a.router-link-active {  
    border-bottom-color:  #0b795a;
    border-top-color: #0b654c;
    border-right-color:  #0b795a;
    border-left-color: #0b795a;
    border-radius: 10px;
    box-shadow:  0 0 2px rgba(12, 47, 30, 0.5);;
}
.xiandai1{
  height: 540px;
}
.footer{
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0b795a;
    font-size: 13px;
    letter-spacing: 10px;
    background-color: rgba(255, 255, 255, 0.777);
    box-shadow: 0px 6px 10px 5px rgba(0, 0, 0, 0.2);
}
</style>

