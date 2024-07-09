<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const username = ref('')
const password = ref('')

const onLogin = () => {
  if (username.value === 'admin' && password.value === '123456') {
    router.push('/main')
    return localStorage.setItem('token', 'Bearer xxx')
  } else {
    alert('用户名或密码输入错误')
    localStorage.removeItem('token')
  }
};

</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 表单区域 -->
      <div class="form-login">
        <h1>* 欢 迎 加 入 *</h1>
        <!-- 登录名称 -->
        <div class="form-group">
          <label for="username">用户名称：</label>
          <input placeholder=" 请输入用户名" 
            type="text" 
            class="form-control" 
            id="username" 
            autocomplete="off"
            v-model.trim="username" />
        </div>
        <!-- 登录密码 -->
        <div class="form-group">
          <label for="password">用户密码：</label>
          <input placeholder=" 请输入密码" 
            type="password" 
            class="form-control" 
            id="password"
            v-model.trim="password" />
        </div>
        <div class="form-group">
          <label for="password">确认密码：</label>
          <input placeholder=" 请再次输入密码" 
            type="password" 
            class="form-control" 
            id="password"
            v-model.trim="password" />
        </div>
        <!-- 登录按钮 -->
        <div class="form-group"> 
          <button type="button" class="btn" @click="router.push('/login')">去登录</button>
          <button type="button" class="btn" @click="onDesign">注  册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  width: 100%;
  height: 600px;
  background-color: rgba(79, 133, 110, 0.321);

}

.login-box {
  display: flex;
  padding-top:55px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-login {
  border-radius: 20px;
  background-color: rgb(248, 245, 245);
  width: 500px;
  height: 500px;
  box-shadow: 0px 0px 10px 3px rgba(254, 254, 254, 0.2);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: rgb(62, 63, 64);
  font-size: 16px;
}

.form-login input {
  height: 45px;
  width: 200px;
  border-radius: 2px;
  font-size: 14px;
  border: 1px solid #32705faf
}
input:focus {  
    box-shadow: 0 0 6px rgba(80, 105, 98, 0.5); /* 聚焦时的阴影效果 */  
    outline: none;
}
.form-group{
  margin: 15px;
  padding-top: 10px;
  
}
h1{
  color: rgb(29, 133, 102);
  padding-top: -40px;
  margin-bottom: 30px;
  font-weight: 600;
}
.form-group label{
  color: rgb(29, 133, 102);
  font-size: 18px;
}

.btn{
  cursor: pointer;
  width: 130px;
  height: 40px;
  background-color: rgba(101, 216, 176, 0.6);
  border-radius: 5px;
  border-style: none;
  margin-right: 30px;
  margin-left: 40px;
  margin-top: 20px;
  color: white;
  font-size: 20px;
  text-align: center;
}

.btn:hover {
  background-color: rgba(25, 84, 65, 0.821);
}
</style>