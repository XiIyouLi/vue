<script setup>
import shuru from './tell/shuru.vue';
import lebiao from './tell/liebiao.vue';
import { ref } from 'vue';
const list=ref([
  {
    id:1,
    name:"小花",
    text:"踏入拙政园的那一刻，仿佛穿越回了古代文人墨客的雅集之地。园内亭台楼阁错落有致，碧水环绕，四季花卉争奇斗艳，每一处都是精心布置的景致，让人不禁感叹古人对于园林艺术的极致追求。漫步其间，不仅能感受到自然之美，更能深刻体会到“借景”、“对景”等造园手法的精妙，真可谓是“一步一景，景景皆画”。"
  },
  {
    id:2,
    name:"张三",
    text:"平江路是苏州古城保存最为完好的历史街区之一，石板路两旁是白墙黛瓦的江南古宅，小桥流水人家，充满了浓郁的水乡风情。沿街漫步，可以随意走进一家茶馆或小吃店，品尝地道的苏州美食，如松鼠桂鱼、碧螺春茶，感受那份悠闲与惬意。此外，夜晚的平江路更是别有一番风味，灯火阑珊，游人如织，让人沉醉在这份古典与现代交织的浪漫之中。"
  },
  {
    id:3,
    name:"小明",
    text:"虎丘作为苏州的标志性景点之一，不仅自然风光秀丽，而且文化底蕴深厚。山上的虎丘塔历经千年风雨仍屹立不倒，是苏州古城的重要象征。游览虎丘，不仅可以欣赏到剑池、试剑石等自然景观，还能参观到众多古迹遗址，如断梁殿、真娘墓等，每一处都承载着丰富的历史故事和传说。登上山顶，俯瞰苏州城，更能感受到这座城市的古朴与繁华并存之美。"
  }
])

const del=function (id) {
  list.value=list.value.filter(item=>item.id!=id)
}
const add=function(newname){
  if(newname.value.trim()===""){
    alert("内容不可为空")
    return
  }
  list.value.unshift({
    id:+new Date(),
    text:newname.value
  })
  newname.value=""
}
</script>
<template>
  <!-- 主体区域 -->
  <section id="app">
    <!-- 输入框 -->
    <shuru
    
    @todo="add"></shuru>

    <!-- 列表区域 -->
    <lebiao
    :list="list"
    @event="del"></lebiao>
  </section>
</template>
<style scoped>

</style>