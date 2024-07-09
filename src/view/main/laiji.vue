<!-- <script setup>
  import {ref} from 'vue';
  import {useRouter} from 'vue-router';
  import {UserStore} from '@/store/userinfo';
  import {ElMessage, ElMessageBox} from 'element-plus';
  import {user_login} from '@/apis/user_login';

  const formRef = ref(null);
  const router = useRouter();
  const userstore = UserStore();
  const LoginFromInfo = ref({
    phone: '',
  password: '',
});

  // 表单校验
  const rules = {
    phone: [{required: true, message: '手机号不能为空', trigger: 'blur' }],
  password: [{required: true, message: '密码不能为空', trigger: 'blur' }],
  }
 // 点击登录按钮
const login = () => {
    formRef.value.validate((valid) => {
      if (valid) {
        user_login(LoginFromInfo.value.phone, LoginFromInfo.value.password).then((res) => {
          if (res.data.status == false) {
            ElMessageBox.alert(res.data.message, '提示', {
              confirmButtonText: '确认',
              type: 'warning',
            });
          }
          if (res.data.status == true) {
            userstore.login(LoginFromInfo.value.phone)
            ElMessage({
              message: '登录成功',
              type: 'success',
            });
            // 跳转到首页.value
            router.push('/');
          }
        });
      } else {
        return false;
      }
    });
};

 const reset = () => {
    formRef.value.resetFields();
 };
</script>
</script>
<template>
  <el-form ref="formRef" :model="LoginfromInfo” :rules="rules" label-position="top" size="large">
    <el-form-item label="手机号" prop="phone">
        <el-input v-model="LoginFromInfo.phone" prefix-icon="Iphone” placeholder="请输入手机号”/>
    </el-form-item>
    <el-form-item label="密码"prop="password">
      <el-input v-model="LoginFromInfo.password" type="password” prefix-icon="Lock"  placeholder="请输入密码”show-password />
    </el-form-item>

      
      <el-button type="primary"  @click="login">登录</el-button><el-button plain @click="reset">重 置</el-button>
      
      <div class="link">
<router-link to="/register">
<el-link type="primary" :underline="false">立即注册</el-link></router-link>
</div>
</el-form>
</template> -->