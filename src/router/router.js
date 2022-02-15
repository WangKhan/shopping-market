import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import myOrder from '@/pages/Center/myOrder'
import groupOrder from '@/pages/Center/groupOrder'
export default [
  {
    path: '/home',
    component: Home,
    meta: {
      show: true
    }
  },
  {
    path: '/search/:keyword?',
    component: Search,
    meta: {
      show: true
    },
    name: 'search',
    props: true
  }, {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      show: false
    }
  }, {
    path: '/register',
    component: Register,
    meta: {
      show: false
    }
  },
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/detail/:skuid',
    component: Detail,
    meta: {
      show: true
    }
  },
  {
    path: '/addcartsuccess',
    component: AddCartSuccess,
    meta: {
      show: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      show: true
    }
  },
  {
    path: '/trade',
    component: Trade,
    meta: {
      show: true
    }
  },
  {
    path: '/pay',
    component: Pay,
    meta: {
      show: true
    }
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    meta: {
      show: true
    }
  }, 
  {
    path: '/center',
    component: Center,
    meta: {
      show: true
    },
    children:[
      {
        path:'myorder',
        component:myOrder
      }, 
      {
        path:'grouporder',
        component:groupOrder
      },
      {
        path:'/center',
        redirect:'myorder'
      }
    ]
  }
]