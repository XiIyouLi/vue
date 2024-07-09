
var http = require('http');
//处理url
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
var mysql = require('mysql');
//创建链接，得到一个对象
//引入数据库
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '109119',
    database: 'user'
});
//连接数据库
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
//执行查询操作 把查询命令发送去
//错误信息返回给第一个参数，第二个参数是返回的结果

var app = http.createServer(function (req, res) {
 

    var url_obj = url.parse(req.url);
    //访问根目录
    if (url_obj.pathname == '/') {
        res.setHeader('content-type', 'text/html;charset=utf-8');
        render('./index.html', res);
    }
    render('.' + url_obj.pathname, res);
        // 登录
        if (url_obj.pathname === '/login' && req.method === 'POST') {
            var user_info = '';
            req.on('data', function (chunk) {
                user_info += chunk;
            });
    
            req.on('end', function (err) {
                if (!err) {
                    var user_obj = querystring.parse(user_info);
                    res.setHeader('content-type', 'text/html;charset=utf-8');
                    var sql = "SELECT * FROM user WHERE username='" + user_obj.username + "'";
                    connection.query(sql, function (error, result) {
                        if (!error && result.length !== 0) {
                            // 用户存在
                            var sql1 = "SELECT * FROM user WHERE username='" + user_obj.username + "' AND password='" + user_obj.password + "'";
                            connection.query(sql1, function (error, result) {
                                if (!error && result.length !== 0) {
                                    // 登录成功
                                    res.writeHead(200, { 'Content-Type': 'application/json' });
                                    res.write('{"status":true}');
                                    res.end();
                                } else {
                                    // 密码错误
                                    res.writeHead(200, { 'Content-Type': 'application/json' });
                                    res.write('{"status":false, "message":"密码输入错误"}');
                                    res.end();
                                }
                            });
                        } else {
                            // 用户不存在
                            res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.write('{"status":false, "message":"该用户不存在"}');
                            res.end();
                        }
                    });
                }
            });
        }



    //获取全部数据
    if (url_obj.pathname == '/getdata') {
        res.setHeader('content-type', 'text/html;charset=utf-8');
        var sql = "SELECT * from user"
        connection.query(sql, function (error, result) {
            var json_result = JSON.stringify(result)
            res.write(json_result)
            res.end()
        })

    }
    //删除数据
    if (url_obj.pathname == '/deldata') {
        var deldata = querystring.parse(url_obj.query).deldata
        var sql = "DELETE FROM user WHERE Id=" + deldata
        connection.query(sql, function (error, result) {
          console.log(result.affectedRows,error)
          if(result.affectedRows>0){
            res.write('{"status":true}');
            res.end();
        } else {
            res.write('{"status":false}');
            res.end();
        }
        })

    }
    //查询数据
    if (url_obj.pathname == '/querydata') {
        res.setHeader('content-type', 'text/html;charset=utf-8');
        var searchdata = querystring.parse(url_obj.query).searchdata
        console.log(searchdata)
        //注意sql语句条件中的引号
        var sql = "select * from user where username like '%" + searchdata + "%'"
        connection.query(sql, function (error, result) {
            console.log(result)
            var json_result = JSON.stringify(result)
            console.log(json_result);
            res.write(json_result)
            res.end()
        })

    }
    //添加
    if (url_obj.pathname = '/adddata' && req.method === 'POST') {
        res.setHeader('content-type', 'text/html;charset=utf-8');
        //要获取post方式发送过来的数据，需要去监听两个事件
        //data事件作用：当浏览器有数据发送过来的时候就会触发data事件
        var post_data = ""
        req.on('data', function (chunk) {
            //chunk：表示数据块，浏览器把数据切块分块发送
            post_data += chunk
        })
        req.on('end', function () {
            //end：数据接收完成以后触发这个事件
            //传递过来的key就是表单的name属性
            var post_obj = querystring.parse(post_data)
            var sql = "INSERT INTO user(Id,username,password,birth,adress,sex,ibto) VALUES(?,?,?,?,?,?,?)";
            var values = [post_obj.id, post_obj.title, post_obj.author, post_obj.publiser, post_obj.pages,
            post_obj.pubdate, post_obj.price];
            console.log(post_obj.id)
            connection.query(sql, values, function (error, result) {
                //如果没有错误，并且result长度不为0,返回注册成功

                if (!error && result && result.length !== 0) {
                    res.write('{"status":true}');
                    res.end();
                } else {
                    res.write('{"status":false}');
                    res.end();
                }

            })
        })
    }




})

app.listen(2000);
function render(url, res) {
    fs.readFile(url, 'utf-8', function (err, data) {
        //err为空，说明返回没有错误write将内容返回
        if (!err) {
            res.write(data);
            res.end();
        }
    })
}