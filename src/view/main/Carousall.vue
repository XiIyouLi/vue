<script setup>
import {LeftCircleOutlined,RightCircleOutlined} from '@ant-design/icons-vue';
</script>
<template>
 <a-carousel arrows autoplay :autoplaySpeed="3000">  <!--自动播放速度  3000ms-->
  <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 12px">
        <right-circle-outlined />
      </div>
    </template>
    <div><img src="/src/images/banner1.png" alt="1" style="width: 100%;height: 100%;"></div>
    <div><img src="/src/images/banner2.png" alt="1" style="width: 100%;height: 500px;"></div>
    <div><img src="/src/images/banner3.png" alt="1" style="width: 100%;height: 500px;"></div>
    <div><img src="/src/images/banner4.png" alt="1" style="width: 100%;height: 500px;"></div>
  </a-carousel>
</template>
<style scoped>
:deep(.slick-slide) {
  height: 500px;
  line-height: 160px;
  background: #7a8eb2;
  overflow: hidden;
}
:deep(.slick-arrow.custom-slick-arrow) {
  width: 50px;
  height: 50px;
  font-size: 50px;
  color: #00ff9d;
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 1;
}
</style>