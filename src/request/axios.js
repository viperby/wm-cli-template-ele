import axios from 'axios'
import conf from '../../conf/conf'
import store from '../store'
import router from '../router/router.js'
import qs from 'qs'
axios.defaults.timeout = 20000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
//axios.defaults.withCredentials=false

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
  let token = store&&store.state?store.state.token:""

  config.headers['Token']=token
  config.headers['SceneType']='app'
  config.headers['DeviceId']=''

  if(config.method  === 'post' && config.data){
		config.data = qs.stringify(config.data);
  }
	if(config.method  === 'get'){
		if(!config.params)config.params={};
	}
    return config;
},(error) =>{
    return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
    if(!res.data.IsPositive){
		/*if(res.data.ErrorCode == 101){
			router.push('/login');
			return
		}*/
		res.data.IsPositive = false;//when IsPositive is Null
        return res.data;
    }	
    return res.data;
}, (error) => {
    console.log('网络异常')
    return Promise.reject(error);
});


// 公共get请求
export const get=(url, params) => {
  return axios.get('/API'+url, {params: params});
}

// 公共post请求
export const post = (url, params) => {
  return axios.post('/API'+url, params);
}

export default axios
