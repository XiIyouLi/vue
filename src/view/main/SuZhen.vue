<script setup>  
import { ref } from 'vue';  
  
const list3 = ref([  
  // ... 你的图片数据 ...  
  {
    id: 1,
    tupian: new URL("/src/images/周庄.jpg", import.meta.url).href,
    name:'周庄古镇'
  },
  {
    id: 2,
    tupian: new URL("/src/images/同里.jpg", import.meta.url).href,
    name:'同里古镇'
  },
  { 
    id:3,
    tupian: new URL("/src/images/千灯.jpg", import.meta.url).href,
    name:'千灯古镇'
  },
  {
    id: 4,
    tupian: new URL("/src/images/木渎.jpg", import.meta.url).href,
    name:'木渎古镇'
  },
  {
    id: 5,
    tupian: new URL("/src/images/yz.jpg", import.meta.url).href,
    name:'甪直古镇'
  },
  { 
    id:6,
    tupian: new URL("/src/images/锦溪.jpg", import.meta.url).href,
    name:'锦溪古镇'
  }
]);  
  
const selectedimg = ref(null); // 用于跟踪当前放大的图片  
  
function enlargeImage(item) {  
  if (selectedimg.value === item) {  
    // 如果已经是放大的图片，则重置它  
    selectedimg.value = null;  
  } else {  
    // 否则，放大该图片并重置其他图片  
    selectedimg.value = item;  
  }  
}  

</script>  
  
<template>  
  <div class="hot" @click.stop> <!-- 添加 @click.stop 以防止点击事件冒泡到容器 -->  
    <div   
      class="hot1"   
      v-for="item in list3"   
      :key="item.id"   
      :class="{ enlarged: item === selectedimg }"  
      @click="enlargeImage(item)"  
    >  
      <img :src="item.tupian" alt="123" :style="{ transform: item === selectedimg ? 'scale(2)' : 'scale(1)' }" />  
      <p class="img_p">{{ item.name }}</p>
    </div>  
  </div>  
</template>  
  
<style scoped>  
.hot {  
  position: relative; /* 使得绝对定位的子元素能够相对于它定位 */  
  cursor: pointer;  
  display: flex;  
  margin-bottom: 40px;
  justify-content: center;  
  align-items: center; /* 垂直居中 */    
  overflow: hidden; /* 隐藏超出容器的部分 */  
}  
.hot1{
    width: 170px;
    margin-left: 3px;
    height: 400px;
    overflow: hidden; /* 隐藏超出容器的部分 */
    box-shadow: 0 0 5px rgba(12, 47, 30, 0.5);
}
.hot1.enlarged img {  
  position: absolute; /* 绝对定位以覆盖其他图片 */  
  border: 0px;
  width: 558px;
  height: 100%;
  left: 32%;
  box-shadow: 0 2px 5px rgba(12, 47, 30, 0.5);
  z-index: 1; /* 确保它在其他图片之上 */  
}  
.img_p{
    position: relative;
    background-color: rgba(142, 145, 144, 0.281);
    margin-top: -400px;
    margin-left: 0px;
    letter-spacing: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    color: rgb(211, 255, 240);
    font-size: 50px;
    writing-mode: vertical-lr;
    width: 170px;
    height: 400px;
    transition: 0.3s;
}
.img_p:hover {
    transform: scale(1.25);
    background-color: rgba(142, 145, 144, 0);
}
img {  
  border: 1px solid #ccc; 
  height: 100%;   
  transition:  0.4s;    
}  
</style>