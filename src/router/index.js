import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Default = {
  redirect: '/home',
  path: ''
};

const Login = {
  component: () => import('../components/content/Login'),
  path: '/login'
};

const UserList = {
  component: () => import('../components/content/UserList'),
  path: '/user/user_list',
};

const Home = {
  redirect: '/user/user_list',
  component: () => import('../components/content/Home'),
  path: '/home',
  children: [
    UserList
  ]
};



const routes = [
  Default,
  Login,
  Home,
  UserList,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const tokenStr = window.sessionStorage.getItem('token');
  // 已经登录跳回原页面
  if (tokenStr && to.path === '/login') return next(from);
  if (to.path === '/login') return next();
  if (!tokenStr) return next('/login');
  return next();
});

export default router
