<script setup>
import { defineProps } from 'vue';
const props=defineProps({
  list:Array
})
const emit=defineEmits(['event'])
</script>
<template>
    <section class="main">
    <ul class="todo-list">
      <li class="todo" v-for="(item,index) in list" :key="item.id">
        <div class="view">
          <span class="index">{{item.name}} :
            <div class="text">{{item.text}}</div>
          </span> 
          
        </div>
      </li>
    </ul>
  </section>
</template>
<style scoped>
  .main{
  position: relative;
  z-index: 2;
  margin-left: 20px;
  margin-right: 15px;
}

.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}

.todo-list li {
  position: relative;
  font-size: 24px;
  height: 150px;
  box-sizing: border-box;
  border-bottom: 1px solid #a3a0a0;
}

.todo-list li:last-child {
  border-bottom: none;
}

.todo-list .view .index {
  position: absolute;
  color: rgb(0, 0, 0);
  left: 10px;
  top: 20px;
  font-size: 22px;
}

.todo-list li .toggle {
  text-align: center;
  width: 40px;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none; /* Mobile Safari */
  -webkit-appearance: none;
  appearance: none;
}

.todo-list li .toggle {
  opacity: 0;
}

.todo-list li .toggle + label {
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: center left;
}

.todo-list li .toggle:checked + label {
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
}

.todo-list li label {
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
}

.todo-list li.completed label {
  color: #d9d9d9;
  text-decoration: line-through;
}

.todo-list li .destroy {
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #afcc9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
}

.todo-list li .destroy:hover {
  color: #5caf5b;
}

.todo-list li:hover .destroy {
  display: block;
}

.todo-list li .edit {
  display: none;
}

.todo-list li.editing:last-child {
  margin-bottom: -1px;
}
.text{
  color: #605e5e;
  font-size: 18px;
  margin-left: 70px;
  margin-top: 10px;
  margin-right: 50px;
  letter-spacing: 2px;
  line-height: 1.5;
  font-style: oblique;
}
</style>