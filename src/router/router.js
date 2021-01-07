import Vue from 'vue'
import Router from 'vue-router'
import conf from './conf'
import confInfo from '../../conf/conf'
//import post from '../request/axios'
import store from '../store'

Vue.use(Router)
const router = new Router(conf)
router.beforeEach((to, from, next) => {
	//进入登录页面或页面路由meta配置不需要登录，直接进入
	if (to.path === '/login' || to.path === "/code"||to.meta?.needLogin===false) {
		next()
		return
	}
	//判断Token是否存在，不存在跳转到登录页
	//TODO token超过有效期，在网络请求拦截，根据服务器返回错误编码示进行跳转登录页
	if(!store.state.token){
		next('/login')
	}else{
		next()
	}
})
export default router
