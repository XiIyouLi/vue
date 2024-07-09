<script setup>
import { ref,computed,watch } from 'vue';
import { getUser,  querybook} from '@/apis/userapi';

const queryall=function(){
  getUser().then(res=>{
    const users=res.data;

    if(users.length>0){
      const firstUser=users[0];
      const username=firstUser.username;
      const password = firstUser.password;
      console.log(`Username: ${username}, Password: ${password}`);
    }
    for( let i=0;i<users.length;i++){
      const firstUser=users[i];
      const username=firstUser.username;
      const password = firstUser.password;
      console.log(`Username: ${username}, Password: ${password}`);
    }
    console.log(res)
   
  })
}
const searchdata=function(){
  querybook({searchdata:'qq'}).then(res=>{
    console.log(res)
  })
}

</script>
<template>
   
    <div class="shou">
      <!-- 搜索框 -->
      <a-space direction="vertical">
      <a-input-search 
     
      placeholder="input search text" 
      style="width: 200px" 
      />
      </a-space>
    </div>
   <button @click="queryall">send111</button>
   <button @click="searchdata">query</button>
</template>


<style scoped src="src/assets/carindex.css"></style>
