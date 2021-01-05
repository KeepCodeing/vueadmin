# Vue admin system
> 参考[视频](https://www.bilibili.com/video/BV1EE411B7SU)练手（半成品）

## 启动项目
```
npm install
npm run server

运行dist/mock/index.js生成数据
```

## 组件
### Login.vue
登陆页面，账号密码只要符合规范就行。

### Home.vue
调用下列组件构成主页面，除了登陆页面所有其它组件都通过它里面的router-view渲染。
1. Header.vue
2. Menu.vue

### Header.vue
头部组件，提供了退出功能。

### Menu.vue
菜单组件，用来切换路由渲染数据。

### SearchBox.vue
表格上的搜索和添加用户组件。需要传递两个参数指定是否显示搜索栏或添加用户按钮。

### Breadcrumb.vue
面包屑组件。传入一个列表指定当前所在的路径。

### TableList.vue
表格组件。该项目中所有表格均由这个组件渲染。它具有两个具名插槽分别位于第一列和最后一列的位置，是用来渲染除了以外的东西的。比如操作列的按钮，角色列表的展开行列等。要使用它需要传入两个参数，data_list和data_obj，前者一般是仓库里请求过来的数据，也就是表格要渲染的数据，后者是表格渲染时需要指定的prop和label参数的数据。

### RoleList.vue
角色列表组件。通过引用TableList渲染渲染表格，行展开的第一列通过插槽传入。使用三个v-for渲染展开后的标签。

### PowerList.vue
权利列表。通过引用TableList渲染表格。

### UserList.vue
用户列表组件。通过引用TableList渲染表格，使用插槽传入操作列。

# 最后
2021年1月5日21:49:23\
还剩三个页面没写，先放着好了...这几天依次做了个人网站，B站手机端仿写，商城后台管理网站，每个项目都是两天，收获很多。\
熟能生巧。


