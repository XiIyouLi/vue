<script setup>
import { ref } from 'vue';
const hotlist = ref([
  {
    id: 1,
    tupian: new URL("/src/images/天平山.jpg", import.meta.url).href,
    name: '天平山',
  },
  {
    id: 2,
    tupian: new URL("/src/images/灵岩山.jpg", import.meta.url).href,
    name: '灵岩山',
  },
  { 
    id:3,
    tupian: new URL("/src/images/虎丘.jpg", import.meta.url).href,
    name:"虎丘",
  }
  
])
</script>

<template>
  
  <div class="hot">
    <div class="hot1" v-for="item in hotlist" :key="item.id">  
    <img :src="item.tupian" alt="123" >
        <h3>{{item.name}}</h3>
    </div>
  </div>
</template>

<style scoped>
img{
  width: 300px;
  height: 300px;
  box-shadow: 0 0 5px rgba(12, 47, 30, 0.5);
  transition: transform 0.3s ease, border-radius 0.3s ease;
}
.hot{
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  height: 300px;
  margin: 10px 100px 60px 100px;
}
h3{
    position: relative;
    color: rgba(44, 128, 105, 0.449);
    font-size: 25px;
    text-align: center;
    margin-top: 15px;
    font-weight: 500;
    letter-spacing: 10px;
}
.hot1{
  width: 300px;
  height: 300px;
}
.hot img:hover{
    transform: scale(1.1); 
    box-shadow: 0 0 10px rgba(12, 47, 30, 0.5);
}
</style>
