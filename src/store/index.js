import Vue from 'vue'
import Vuex from 'vuex'
//数据持久化
import createPersistedState  from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token:"",
		uInfo:{},
		noticeEx:{},
		noticeRoom:{},
	},
	mutations: {
		update (state, config) {
			Object.keys(config).map((item, key) => {
				state[item] = config[item]
			})
		}
	},
	actions: {
		
	},
	modules: {
		
	},
	plugins: [createPersistedState({
		storage: window.localStorage,
		reducer(val) {
			return val
		}
	})]
})
