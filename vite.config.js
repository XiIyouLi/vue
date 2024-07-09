import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    //配置代理服务器,设置port服务器端口号
    port:8888,
    open:true,//项目启动，浏览器自动打开
    proxy:{
      '/api':{
        target:'http://localhost:2000',
        ChangeOrigin:true,
        //把请求的 /api用空字符串替代
        rewrite:(path)=>path.replace(/^\/api/,"")
      }
    }
  }
})
