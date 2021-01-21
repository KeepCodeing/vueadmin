const Mock = require('mockjs');
const express = require('express');

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// 注意这里没写成data: {info: [...]}的原因是这样写还要取个info才能拿到数据...
const user_list = Mock.mock({
  'data|20-50': [
    {
      'name': '@cname()', 'city': '@city()', 'role|1': ['普通用户', '管理员', 'VIP用户'], 'id': '@increment()',
      'state|1': true
    }
  ],
});

const power_list = Mock.mock({
  'data|20-30': [
    {
      'name|1': ['商品管理', '订单管理', '权限管理', '商品列表', '添加商品', '订单列表', '添加订单'],
      'path|1': ['goods', 'orders', 'roles', 'users'],
      'level|1': ['一级', '二级', '三级', '四级']
    },

  ]
});

const role_list = Mock.mock({
  "data": [
    {
      "id": 384,
      "roleName": "老板11",
      "roleDesc": "boss",
      "children": [
        {
          "id": 101,
          "authName": "商品管理",
          "path": "goods",
          "children": [
            {
              "id": 104,
              "authName": "商品列表",
              "path": "goods",
              "children": [
                {
                  "id": 105,
                  "authName": "添加商品",
                  "path": "goods"
                },
                {
                  "id": 116,
                  "authName": "商品修改",
                  "path": "goods"
                },
                {
                  "id": 117,
                  "authName": "商品删除",
                  "path": "goods"
                },
                {
                  "id": 150,
                  "authName": "更新商品图片",
                  "path": "goods"
                },
                {
                  "id": 151,
                  "authName": "更新商品属性",
                  "path": "goods"
                },
                {
                  "id": 152,
                  "authName": "更新商品状态",
                  "path": "goods"
                },
                {
                  "id": 153,
                  "authName": "获取商品详情",
                  "path": "goods"
                }
              ]
            },
            {
              "id": 115,
              "authName": "分类参数",
              "path": "params",
              "children": [
                {
                  "id": 142,
                  "authName": "获取参数列表",
                  "path": "categories"
                },
                {
                  "id": 143,
                  "authName": "创建商品参数",
                  "path": "categories"
                },
                {
                  "id": 144,
                  "authName": "删除商品参数",
                  "path": "categories"
                }
              ]
            },
            {
              "id": 121,
              "authName": "商品分类",
              "path": "categories",
              "children": [
                {
                  "id": 122,
                  "authName": "添加分类",
                  "path": "categories"
                },
                {
                  "id": 123,
                  "authName": "删除分类",
                  "path": "categories"
                },
                {
                  "id": 149,
                  "authName": "获取分类详情",
                  "path": "categories"
                }
              ]
            }
          ]
        },
        {
          "id": 102,
          "authName": "订单管理",
          "path": "orders",
          "children": [
            {
              "id": 107,
              "authName": "订单列表",
              "path": "orders",
              "children": [
                {
                  "id": 109,
                  "authName": "添加订单",
                  "path": "orders"
                },
                {
                  "id": 154,
                  "authName": "订单更新",
                  "path": "orders"
                },
                {
                  "id": 155,
                  "authName": "获取订单详情",
                  "path": "orders"
                }
              ]
            }
          ]
        },
        {
          "id": 103,
          "authName": "权限管理",
          "path": "rights",
          "children": [
            {
              "id": 112,
              "authName": "权限列表",
              "path": "rights",
              "children": [
                {
                  "id": 147,
                  "authName": "查看权限",
                  "path": "rights"
                }
              ]
            },
            {
              "id": 111,
              "authName": "角色列表",
              "path": "roles",
              "children": [
                {
                  "id": 129,
                  "authName": "添加角色",
                  "path": "roles"
                },
                {
                  "id": 130,
                  "authName": "删除角色",
                  "path": "roles"
                },
                {
                  "id": 134,
                  "authName": "角色授权",
                  "path": "roles"
                },
                {
                  "id": 135,
                  "authName": "取消角色授权",
                  "path": "roles"
                },
                {
                  "id": 138,
                  "authName": "获取角色列表",
                  "path": "roles"
                },
                {
                  "id": 139,
                  "authName": "获取角色详情",
                  "path": "roles"
                },
                {
                  "id": 140,
                  "authName": "更新角色信息",
                  "path": "roles"
                }
              ]
            }
          ]
        },
        {
          "id": 125,
          "authName": "用户管理",
          "path": "users",
          "children": [
            {
              "id": 110,
              "authName": "用户列表",
              "path": "users",
              "children": [
                {
                  "id": 131,
                  "authName": "添加用户",
                  "path": "users"
                },
                {
                  "id": 132,
                  "authName": "删除用户",
                  "path": "users"
                },
                {
                  "id": 133,
                  "authName": "更新用户",
                  "path": "users"
                },
                {
                  "id": 136,
                  "authName": "获取用户详情",
                  "path": "users"
                },
                {
                  "id": 137,
                  "authName": "分配用户角色",
                  "path": "users"
                },
                {
                  "id": 159,
                  "authName": "设置管理状态",
                  "path": "users"
                }
              ]
            }
          ]
        },
        {
          "id": 145,
          "authName": "数据统计",
          "path": "reports",
          "children": [
            {
              "id": 146,
              "authName": "数据报表",
              "path": "reports",
              "children": [
                {
                  "id": 148,
                  "authName": "查看数据",
                  "path": "reports"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 385,
      "roleName": "速度",
      "roleDesc": "安师大asd",
      "children": [
        {
          "id": 101,
          "authName": "商品管理",
          "path": "goods",
          "children": [
            {
              "id": 104,
              "authName": "商品列表",
              "path": "goods",
              "children": [
                {
                  "id": 105,
                  "authName": "添加商品",
                  "path": "goods"
                },
                {
                  "id": 150,
                  "authName": "更新商品图片",
                  "path": "goods"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 386,
      "roleName": "工程师2号",
      "roleDesc": "工人hahaha",
      "children": [
        {
          "id": 101,
          "authName": "商品管理",
          "path": "goods",
          "children": [
            {
              "id": 115,
              "authName": "分类参数",
              "path": "params",
              "children": [
                {
                  "id": 142,
                  "authName": "获取参数列表",
                  "path": "categories"
                },
                {
                  "id": 143,
                  "authName": "创建商品参数",
                  "path": "categories"
                },
                {
                  "id": 144,
                  "authName": "删除商品参数",
                  "path": "categories"
                }
              ]
            },
            {
              "id": 104,
              "authName": "商品列表",
              "path": "goods",
              "children": [
                {
                  "id": 105,
                  "authName": "添加商品",
                  "path": "goods"
                },
                {
                  "id": 116,
                  "authName": "商品修改",
                  "path": "goods"
                },
                {
                  "id": 117,
                  "authName": "商品删除",
                  "path": "goods"
                }
              ]
            }
          ]
        },
        {
          "id": 102,
          "authName": "订单管理",
          "path": "orders",
          "children": [
            {
              "id": 107,
              "authName": "订单列表",
              "path": "orders",
              "children": [
                {
                  "id": 109,
                  "authName": "添加订单",
                  "path": "orders"
                },
                {
                  "id": 154,
                  "authName": "订单更新",
                  "path": "orders"
                },
                {
                  "id": 155,
                  "authName": "获取订单详情",
                  "path": "orders"
                }
              ]
            }
          ]
        },
        {
          "id": 145,
          "authName": "数据统计",
          "path": "reports",
          "children": [
            {
              "id": 146,
              "authName": "数据报表",
              "path": "reports",
              "children": [
                {
                  "id": 148,
                  "authName": "查看数据",
                  "path": "reports"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 392,
      "roleName": "测试1234",
      "roleDesc": "11111223333",
      "children": [
        {
          "id": 103,
          "authName": "权限管理",
          "path": "rights",
          "children": [
            {
              "id": 111,
              "authName": "角色列表",
              "path": "roles",
              "children": [
                {
                  "id": 129,
                  "authName": "添加角色",
                  "path": "roles"
                },
                {
                  "id": 130,
                  "authName": "删除角色",
                  "path": "roles"
                },
                {
                  "id": 134,
                  "authName": "角色授权",
                  "path": "roles"
                },
                {
                  "id": 138,
                  "authName": "获取角色列表",
                  "path": "roles"
                },
                {
                  "id": 139,
                  "authName": "获取角色详情",
                  "path": "roles"
                },
                {
                  "id": 140,
                  "authName": "更新角色信息",
                  "path": "roles"
                },
                {
                  "id": 141,
                  "authName": "更新角色权限",
                  "path": "roles"
                }
              ]
            },
            {
              "id": 112,
              "authName": "权限列表",
              "path": "rights",
              "children": [
                {
                  "id": 147,
                  "authName": "查看权限",
                  "path": "rights"
                }
              ]
            }
          ]
        },
        {
          "id": 125,
          "authName": "用户管理",
          "path": "users",
          "children": [
            {
              "id": 110,
              "authName": "用户列表",
              "path": "users",
              "children": [
                {
                  "id": 131,
                  "authName": "添加用户",
                  "path": "users"
                },
                {
                  "id": 132,
                  "authName": "删除用户",
                  "path": "users"
                },
                {
                  "id": 133,
                  "authName": "更新用户",
                  "path": "users"
                },
                {
                  "id": 136,
                  "authName": "获取用户详情",
                  "path": "users"
                },
                {
                  "id": 137,
                  "authName": "分配用户角色",
                  "path": "users"
                },
                {
                  "id": 159,
                  "authName": "设置管理状态",
                  "path": "users"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 395,
      "roleName": "测试11",
      "roleDesc": "666",
      "children": [
        {
          "id": 101,
          "authName": "商品管理",
          "path": "goods",
          "children": [
            {
              "id": 115,
              "authName": "分类参数",
              "path": "params",
              "children": [
                {
                  "id": 143,
                  "authName": "创建商品参数",
                  "path": "categories"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 399,
      "roleName": "leader",
      "roleDesc": "12345",
      "children": [
        {
          "id": 101,
          "authName": "商品管理",
          "path": "goods",
          "children": [
            {
              "id": 104,
              "authName": "商品列表",
              "path": "goods",
              "children": [
                {
                  "id": 105,
                  "authName": "添加商品",
                  "path": "goods"
                }
              ]
            }
          ]
        },
        {
          "id": 125,
          "authName": "用户管理",
          "path": "users",
          "children": [
            {
              "id": 110,
              "authName": "用户列表",
              "path": "users",
              "children": [
                {
                  "id": 131,
                  "authName": "添加用户",
                  "path": "users"
                },
                {
                  "id": 132,
                  "authName": "删除用户",
                  "path": "users"
                },
                {
                  "id": 133,
                  "authName": "更新用户",
                  "path": "users"
                },
                {
                  "id": 136,
                  "authName": "获取用户详情",
                  "path": "users"
                }
              ]
            }
          ]
        },
        {
          "id": 145,
          "authName": "数据统计",
          "path": "reports",
          "children": [
            {
              "id": 146,
              "authName": "数据报表",
              "path": "reports",
              "children": [
                {
                  "id": 148,
                  "authName": "查看数据",
                  "path": "reports"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 407,
      "roleName": "周慧敏",
      "roleDesc": "明星",
      "children": [
        {
          "id": 101,
          "authName": "商品管理",
          "path": "goods",
          "children": [
            {
              "id": 104,
              "authName": "商品列表",
              "path": "goods",
              "children": [
                {
                  "id": 152,
                  "authName": "更新商品状态",
                  "path": "goods"
                }
              ]
            }
          ]
        },
        {
          "id": 102,
          "authName": "订单管理",
          "path": "orders",
          "children": [
            {
              "id": 107,
              "authName": "订单列表",
              "path": "orders",
              "children": [
                {
                  "id": 155,
                  "authName": "获取订单详情",
                  "path": "orders"
                }
              ]
            }
          ]
        },
        {
          "id": 103,
          "authName": "权限管理",
          "path": "rights",
          "children": [
            {
              "id": 111,
              "authName": "角色列表",
              "path": "roles",
              "children": [
                {
                  "id": 130,
                  "authName": "删除角色",
                  "path": "roles"
                }
              ]
            }
          ]
        },
        {
          "id": 125,
          "authName": "用户管理",
          "path": "users",
          "children": [
            {
              "id": 110,
              "authName": "用户列表",
              "path": "users",
              "children": [
                {
                  "id": 131,
                  "authName": "添加用户",
                  "path": "users"
                }
              ]
            }
          ]
        },
        {
          "id": 145,
          "authName": "数据统计",
          "path": "reports",
          "children": [
            {
              "id": 146,
              "authName": "数据报表",
              "path": "reports",
              "children": [
                {
                  "id": 148,
                  "authName": "查看数据",
                  "path": "reports"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 410,
      "roleName": "333",
      "roleDesc": "2222",
      "children": []
    },
    {
      "id": 411,
      "roleName": "333",
      "roleDesc": "2222",
      "children": [
        {
          "id": 103,
          "authName": "权限管理",
          "path": "rights",
          "children": [
            {
              "id": 111,
              "authName": "角色列表",
              "path": "roles",
              "children": [
                {
                  "id": 129,
                  "authName": "添加角色",
                  "path": "roles"
                },
                {
                  "id": 130,
                  "authName": "删除角色",
                  "path": "roles"
                },
                {
                  "id": 134,
                  "authName": "角色授权",
                  "path": "roles"
                },
                {
                  "id": 135,
                  "authName": "取消角色授权",
                  "path": "roles"
                },
                {
                  "id": 138,
                  "authName": "获取角色列表",
                  "path": "roles"
                },
                {
                  "id": 139,
                  "authName": "获取角色详情",
                  "path": "roles"
                },
                {
                  "id": 140,
                  "authName": "更新角色信息",
                  "path": "roles"
                },
                {
                  "id": 141,
                  "authName": "更新角色权限",
                  "path": "roles"
                }
              ]
            },
            {
              "id": 112,
              "authName": "权限列表",
              "path": "rights",
              "children": [
                {
                  "id": 147,
                  "authName": "查看权限",
                  "path": "rights"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});

const goods_list = Mock.mock({
  'data|20-50': [
    {
      'name': '@cword(5, 25)',
      'price': '@float(10, 100, 0, 2)',
      'weight' : '@float(20, 100, 0, 2)',
      'date': '@date("yyyy-MM-dd")'
    }
  ]
});

const order_list = Mock.mock({
  'data|20-50': [
    {
      'id|1': 'vueadmin-' + '@cword("abcdefghijklmn123456789", 10)',
      'price|1': '@float(70, 700, 2)',
      'pay|1': ['是', '否'],
      'send|1': ['是', '否'],
      'date|1': '@date(yyyy-MM-dd)'
    },
  ]
})

app.use('/data/menu_list', (req, res) => {
  res.json(Mock.mock({
    "data": [
      {
        "title": "用户管理",
        "id": 101,
        "url": "/user",
        "sub_menu": [
          {"title": "用户列表", "id": 1011, "url": "/user_list"}
        ]
      },
      {
        "title": "权限管理",
        "id": 201,
        "url": "/power",
        "sub_menu": [
          {"title": "角色列表", "id": 2011, "url": "/role_list"},
          {"title": "权限列表", "id": 2012, "url": "/power_list"}
        ]
      },
      {
        "title": "商品管理",
        "id": 301,
        "url": "/goods",
        "sub_menu": [
          {"title": "商品列表", "id": 3011, "url": "/goods_list"},
          {"title": "商品分类", "id": 3012, "url": "/goods_kind"},
          {"title": "分类参数", "id": 3013, "url": "/goods_agreement"},
        ]
      },
      {
        "title": "订单管理",
        "id": 401,
        "url": "/order",
        "sub_menu": [
          {"title": "订单列表", "id": 4011, "url": "/order_list"}
        ]
      },
      {
        "title": "数据统计",
        "id": 501,
        "url": "/show_data",
        "sub_menu": [
          {"title": "数据列表", "id": 5011, "url": "/data_list"}
        ]
      }
    ]
  }))
});

app.use('/data/user_list', (req, res) => {
  res.json(user_list);
});

app.use('/data/power_list', (req, res) => {
  res.json(power_list);
});

app.use('/data/role_list', (req, res) => {
  res.json(role_list);
})

app.use('/data/goods_list', (req, res) => {
  res.json(goods_list);
});

app.use('/data/order_list', (req, res) => {
  res.json(order_list);
});

app.listen('8090', () => {
  console.log('accessed');
});
