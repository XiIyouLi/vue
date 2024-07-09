import BuyView from "@/view/BuyView.vue";
import MyView from "@/view/MyView.vue";
import TellView from "@/view/TellView.vue";
import NotFound from "@/view/NotFound.vue";
import XianDai from "@/view/main/XianDai.vue";
import ChengShi from "@/view/main/ChengShi.vue";
import { createRouter, createWebHistory } from "vue-router";
import ZhuView from "@/view/ZhuView.vue";
import Login from "@/view/Login.vue";
import Design from "@/view/Design.vue";

function isLoggedIn() {  
    return localStorage.getItem('isLoggedIn') === 'true';  
  }
//创建路由
const routes=[
    //创建路由规则，数组
    {
        path:'/',
        redirect:'/main'
    },
    {
        path:'/main',
        redirect:'/main/xiandai'
    },
    {
        path:'/main',
        name:'main',
        component:ZhuView,
        children:[
            {
                path:'xiandai',
                name:'main-xiandai',
                component:XianDai
            },
            {
                path:'chengshi',
                name:'main-chengshi',
                component:ChengShi
            }
        ]
    },
    {
        path:'/buy',
        name:'buy',
        component:BuyView
    },
    {
        path:'/tell',
        name:'tell',
        component:TellView
    },
    {
        path:'/my',
        name:'my',
        component:MyView,
        meta: { requiresAuth: true } 
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/design',
        name:'design',
        component:Design
    },
    {
        path:'/:pathWatch(.*)*',
        component:NotFound
    }
]
const router=createRouter({
    history:createWebHistory(),//采用html5路由模式
    routes
})

// 添加全局前置守卫  
router.beforeEach((to, from, next) => {  
    if (to.matched.some(record => record.meta.requiresAuth)) {  
      if (!isLoggedIn()) {  
        next({  
          path: '/login',  
          query: { redirect: to.fullPath }  
        });  
      } else {  
        next();  
      }  
    } else {  
      next();  
    }  
  });  
//路由对象暴露出去
export default router