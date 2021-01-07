import err from './errcode.js'
export default {
	install(Vue, options) {
		Vue.prototype.$tips = {
			success(msg) {
				Vue.prototype.$message({ message: msg, type: 'success', offset: '50' })
			},
			warning(msg) {
				Vue.prototype.$message({ message: msg, type: 'warning', offset: '50' })
			},
			info(msg) {
				Vue.prototype.$message({ message: msg, type: 'info', offset: '50' })
			},
			error(msg) {
				Vue.prototype.$message({ message: msg, type: 'error', offset: '50' })
			},
			code(errsrc,errcode){
				if(err[errsrc] && err[errsrc][errcode]){
					Vue.prototype.$tips.error(err[errsrc][errcode])
				}else{
					Vue.prototype.$tips.error("未知错误")
				}
			}
		}
	},
}
