<script setup>
import { ref } from 'vue';
const hotlist = ref([
  {
    id: 1,
    tupian: new URL("/src/images/留园.jpg", import.meta.url).href,
    name: '留园',
    content:"与北京颐和园、承德避暑山庄并称中国“四大名园”。"
  },
  {
    id: 2,
    tupian: new URL("/src/images/平江路.jpg", import.meta.url).href,
    name: '平江路',
    content:'平江路历史街区是苏州古城保存"最为完整"的一个区域，堪称古城缩影。'
  },
  { 
    id:3,
    tupian: new URL("/src/images/金鸡湖.jpg", import.meta.url).href,
    name:"金鸡湖",
    content:"“国家5A级旅游景区”，全国唯一的具有商务旅游特质的同级别景区。"
  },
  { 
    id:4,
    tupian: new URL("/src/images/重元寺.jpg", import.meta.url).href,
    name:"重元寺",
    content:"“水上莲花寺庙”，寺前的观音岛供奉着一尊高达33米的室内观音像，是全国室内最高也是最重的观音造像。"
  }
])
</script>

<template>
  
  <div class="hot">
    <div class="hot1" v-for="item in hotlist" :key="item.id">  
    <img :src="item.tupian" alt="123" >
      <div class="hot-p">
        <h3>{{item.name}}</h3>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
img{
  width: 300px;
  height: 300px;
  box-shadow: 0 0 5px rgba(12, 47, 30, 0.5);
}
.hot{
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  height: 300px;
  margin: 10px 80px 10px 80px;
}
.hot1{
  width: 300px;
  height: 300px;
}
.hot-p{
  display: flex;
  width: 300px;
  height: 100px;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -100px;
  position: relative;
  background-color: rgba(124, 162, 162, 0.797);
   /* 初始状态为隐藏 */  
   opacity: 0;  
  visibility: hidden;
  /* 添加过渡效果，使显示和隐藏更加平滑 */  
  transition: opacity 0.3s ease-in-out, visibility 0s linear 0.3s;
}
.hot-p p{
  margin: 0px 10px 10px 10px;
  text-align: center;
}
.hot1 :hover + .hot-p {  
  /* 显示 .hot-p */  
  opacity: 1;  
  visibility: visible;  
  /* 取消过渡效果的延迟，使显示立即生效 */  
  transition: opacity 0.3s ease-in-out;
}
.hot img:hover{
  box-shadow: 0 0 10px rgba(19, 73, 47, 0.589);
}
.hot-p:hover{
  opacity: 1;  
  visibility: visible; 
}
</style>
