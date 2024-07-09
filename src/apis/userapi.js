import request from '@/uitls/request.js';
export const getUser=()=>{
    return request.get('/getdata')
}
export function querybook(data){
    return request({
        url:'/querydata',
        method:'get',
        params:data  //get请求发送数据
    })
}
export function user_login(username, password) {
     return request({
     url: '/login',
     method: 'POST',
     data: 'username=' + username + '&password=' + password,
     });
    }