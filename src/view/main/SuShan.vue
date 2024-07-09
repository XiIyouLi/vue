<script setup>
import { ref } from 'vue';
const list = ref([
    {
        id: 1,
        tupian: new URL("/src/images/阳澄湖.jpg", import.meta.url).href,
        name: '阳 澄 湖',
        adress: '苏州城东北五公里，跨相城区和昆山市',
        content: '阳澄湖水产资源十分丰富，白鱼、鲢鱼、清水虾、大闸蟹为"湖中六宝"，其中素有"蟹中之王"美称的阳澄湖清水大闸蟹更是驰名中外。'
    },
    {
        id: 2,
        tupian: new URL("/src/images/石湖.png", import.meta.url).href,
        name: '石 湖',
        adress: '苏州古城西南5000米、太湖以东5000米处',
        content: '石湖是一个以吴越遗迹和田园风光见称的风景区，为太湖国家级风景名胜区的组成部分，宋代诗人范成大晚年定居于此，拥有渔庄、天镜阁、行春桥、石湖串月等景观景物。'
    },
    {
        id: 3,
        tupian: new URL("/src/images/荷塘月色 .jpg", import.meta.url).href,
        name: "荷塘月色湿地公园",
        adress: '苏州市相城区太阳路西4575号(黄桥街道上)',
        content: "公园建有百荷流香园、水景植物观光栈桥、荷韵文化长廊、菱香舟影、荷塘迷宫、水趣园、莲香品茗馆、水芸坊茶楼、荷香阁餐厅、荷塘夜景灯光、蘑菇亭等特色游览项目。"
    }
    
])
</script>

<template>
    <div class="shan" v-for="item in list" :key="item.id">
            <img :src="item.tupian" alt="1">
        <div class="shan1">
            <h2>{{item.name}}</h2>
            <h3>地址:<p>{{item.adress}}</p></h3>
            <h3>特色:<p>{{ item.content }}</p></h3>
        </div>
    </div>
</template>

<style scoped>
img{
    width: 400px;
    height: 240px;
    margin-left: 20px;
    border-right: 2px solid white;
    border-left: 2px solid white;
}
.shan {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 240px;
    margin: 12px 250px 12px 250px;
    background-color: #559789;
    border-radius: 10px;  
    transition: transform 0.3s ease-in-out; 
}
p{
    font-size: 16px;
}
.shan1{
    color: rgb(234, 240, 237);
    width: 450px;
}
.shan:hover{
    background-color: #5fa999;
    transform: scale(1.002); 
    box-shadow: 0 0 8px rgba(19, 73, 47, 0.589);
}
</style>
