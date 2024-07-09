<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
</script>

<template>
<!-- 头部 -->
<div class="tab">
    <img src="./images/logo.png" alt="1" style="width: 98.7px;height: 52.8px;">
    <!-- 下拉菜单 -->
    <router-link to="/main/xiandai">首页</router-link>
    <router-link to="/tell">社区</router-link>
    <router-link to="/my">个人主页</router-link>  
</div>
    <router-view></router-view>
</template>

<style scoped>
div.tab{
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.777);
    box-shadow: 0px 6px 10px -7px rgba(0, 0, 0, 0.2);
}
.tab a{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color:#0b654c;
    width: 200px;  
    height: 80px;
    font-size: 25px;
    letter-spacing:2px;
    border-bottom: 5px solid transparent;/* 始终有一个透明的底部边框 */
}
.tab a:hover {  
  border-bottom-color:  #0b795a;
}
.tab a.router-link-active {  
    color:white; 
    background-color: #5fa999;  
    border-bottom-color:  #0b795a;
}
</style>
