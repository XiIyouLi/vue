<template> 
<div style="display: flex;justify-content: center;position: relative;z-index:-10;">
  <img src="../images/banner1.png" alt="11" style="height: 500px;position: absolute;">
</div> 
  <div class="myview">
    <div class="my">
      <img src="../images/糕点.jpg" alt="22" class="myimg">
      <h1>用户名</h1>
      <div class="my1">
        <h2>等级：</h2>
        <h2>现居：</h2>
        <img src="../images/设置.png" alt="设置">
      </div>
      <div class="my3">
        <h2>个人简介：
          <div class="my4">
            <p>松鼠桂鱼：
入选理由：这道菜不仅是苏州菜的代表，更是江苏省非物质文化遗产之一。其制作技艺精湛，色香味俱佳，深受食客喜爱。
特色描述：选用新鲜桂鱼为主料，经过去骨、改刀、腌制等工序后，再裹上面粉炸至金黄酥脆。最后浇上糖醋汁，撒上松子、葱花点缀，外酥里嫩，酸甜可口，令人回味无穷。
推荐餐厅：吴记小园楼（西北街店）等苏帮菜馆。
阳澄湖大闸蟹：
入选理由：以其肉质鲜美、膏黄丰满而闻名于世，是苏州秋季不可错过的美食。
特色描述：每年秋风起时，正是品尝阳澄湖大闸蟹的最佳时节。蟹肉鲜嫩，蟹黄浓郁，搭配姜葱、细砂糖等佐料烹制，味道更加美妙。
食用建议：尽量选择正规的餐厅或市场购买，以确保品质。
苏式面：
入选理由：一碗苏式面，既是苏式精致生活的代表，也是江南饮食文化的写照。
特色描述：苏式面的汤头有红汤、白汤之分，浇头种类繁多，如焖肉、爆鱼、虾仁等。面条细而有弹性，汤头鲜美，浇头丰富多样，让人欲罢不能。
推荐餐厅：伟记奥面馆（白塔东路店）、观振兴等老字号面馆。
哑巴生煎：
入选理由：当地生煎的代表，几十年的老店，2024年必吃榜入围餐厅。
特色描述：生煎皮酥、汁浓、肉香，上面撒上了一层碧绿的葱花和清香的芝麻。咬一口，肉香、油香、葱香、芝麻香在口中交织，美味无穷。
地址：平江街道临顿路温家岸12号。</p>
          </div>
        </h2>
      </div>
    </div>
  </div>
</template>  
  
<script setup>  
  
</script>  
  
<style scoped>  
.myview{
  background-color: rgba(68, 167, 129, 0.836);
  display: flex;
  justify-content: center;
  margin-top: 500px;
}
.my{
  background-color: rgba(162, 202, 186, 0.541);
  box-shadow: 0 0 2px rgba(186, 186, 186, 0.589);
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.myimg{
  width: 300px;
  border-radius: 150px;
  border: 1px solid #8e8c8c;
  box-shadow: 0 0 8px rgba(19, 73, 47, 0.589);
  position: relative;
  margin-top: -35px;
}
h1{
  color: rgb(26, 73, 55);
  padding: 16px;
}
.my1{
  display: flex;
  color: rgb(13, 64, 47);
}
.my1 img{
  height: 30px;
  margin: 0 10px 0 60px;
}
.my1 h2{
  margin: 0 50px 0 30px;
}
.my3 h2{
  display: flex;
  margin: 30px -610px 50px;
}
.my4{
  width: 930px;
  height: 500px;
  background-color: rgb(220, 227, 225);
  border-radius: 20px;
  padding: 50px;
  margin-left: 20px;
  color: #4b675e;
  font-style: oblique;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.5;
}
</style>