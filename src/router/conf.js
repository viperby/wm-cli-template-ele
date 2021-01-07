const options = {
	mode: 'history',
	//base: process.env.BASE_URL,
	routes: [
		{
			path:"/",
			redirect:"/main"
		},{
			path: '/login',
			name: 'login',
			component: () => import('../../pages/login/index.vue'),     
		}
	]
}
export default options
