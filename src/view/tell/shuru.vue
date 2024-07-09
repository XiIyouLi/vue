<script setup>
import {ref} from 'vue'
const newname=ref("") //双向绑定
const emit=defineEmits(['todo'])
const add_li=()=>{
  emit('todo',newname)
}
</script>
<template>
<header class="header">
      <input placeholder="请输入内容" class="new-todo" v-model="newname"/>
      <button class="add" @click="add_li">发表内容</button>
    </header>
</template>
<style scoped>
#app {
  background: #fff;
  margin: 180px 0 40px 0;
  padding: 15px;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
#app .header input {
  border: 2px solid rgba(39, 130, 86, 0.684);
  border-radius: 10px;
  margin: 20px;
}
#app .add {
  position: absolute;
  right: -3px;
  top: 120px;
  height: 68px;
  width: 140px;
  text-align: center;
  background-color: rgba(31, 136, 101, 0.829);
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  border: none;
  border-radius: 0 10px 10px 0;
}

#app input::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

#app input::-moz-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

#app input::input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: gray;
}
.new-todo,
.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.new-todo {
  padding: 16px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>