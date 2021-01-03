const Mock = require('mockjs');
const express = require('express');

const app = express();

// 注意这里没写成data: {info: [...]}的原因是这样写还要取个info才能拿到数据...
const user_list = Mock.mock({
  'data|20-50': [{'name': '@cname()', 'city': '@city()', 'id': '@increment()'}],
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/data/menu_list', (req, res) => {
  res.json(Mock.mock({
    "data": [
      {
        "title":  "用户管理",
        "id": 101,
        "url": "/user",
        "sub_menu": [
          {"title":  "用户列表", "id":  1011, "url":  "/user_list"}
        ]
      },
      {
        "title":  "权限管理",
        "id": 201,
        "url": "/competence",
        "sub_menu": [
          {"title":  "角色列表", "id":  2011, "url":  "/role_list"},
          {"title":  "权限列表", "id":  2012, "url":  "/competence_list"}
        ]
      },
      {
        "title":  "商品管理",
        "id": 301,
        "url": "/goods",
        "sub_menu": [
          {"title":  "商品列表", "id":  3011, "url":  "/goods_list"}
        ]
      },
      {
        "title":  "订单管理",
        "id": 401,
        "url": "/order",
        "sub_menu": [
          {"title":  "订单列表", "id":  4011, "url":  "/order_list"}
        ]
      },
      {
        "title":  "数据统计",
        "id": 501,
        "url": "/show_data",
        "sub_menu": [
          {"title":  "数据列表", "id":  5011, "url":  "/data_list"}
        ]
      }
    ]
  }))
});

app.use('/data/user_list', (req, res) => {
  res.json(user_list);
});

app.listen('8090', () => {
  console.log('accessed');
});
