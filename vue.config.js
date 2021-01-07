

const path = require('path')
const conf=require(resolve("/conf/conf.js"));

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve(""))
	},
	//publicPath: '/public',

	devServer:{
		proxy: {
			'/API': {
				target: '',  //目标接口域名
				target:conf.getCurrentServeAddr('main'),
				changeOrigin: true,  //是否跨域
			},
		}
	}
	
	
}
