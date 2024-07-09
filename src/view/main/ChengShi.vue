<script setup>
import { ref } from 'vue';
const hotlist = ref([
  {
    id: 1,
    tupian: new URL("/src/images/糕点.jpg", import.meta.url).href,
  },
  {
    id: 2,
    tupian: new URL("/src/images/团扇.jpg", import.meta.url).href,
  },
  { 
    id:3,
    tupian: new URL("/src/images/鱼.jpg", import.meta.url).href,
  },
  {
    id: 4,
    tupian: new URL("/src/images/碧螺春.jpg", import.meta.url).href,
  },
  {
    id: 5,
    tupian: new URL("/src/images/点茶.png", import.meta.url).href,
  },
  { 
    id:6,
    tupian: new URL("/src/images/苏帮菜.jpg", import.meta.url).href,
  },
  {
    id: 7,
    tupian: new URL("/src/images/丝绸.jpg", import.meta.url).href,
  },
  { 
    id:8,
    tupian: new URL("/src/images/kunqu.jpg", import.meta.url).href,
  },
  
])
</script>

<template>
  <div class="hot">
    <div v-for="item in hotlist" :key="item.id">  
    <img :src="item.tupian" alt="123" >
    </div>
  </div>
</template>

<style scoped>
img{
  width: 220px;
  height: 220px;
  border-radius: 110px;
  box-shadow: 0 0 2px rgba(12, 47, 30, 0.5);
  transition:  border-radius 0.3s ease;
}
.hot{
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 创建4列，每列相等宽度 */  
  grid-gap: 37px; /* 行与列间的间距 */  
  height: 500px;
  width: 1110px;
  margin: 20px 330px 20px 210px;
}
.hot img:hover{ 
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(12, 47, 30, 0.5);
}
</style>
