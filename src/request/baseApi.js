import {get,post} from './axios'
/***************[SOBIZ]*********************/
/*login:login*/
const login = (pars) => post('/SoBiz/LoginByApp',pars)
const logout = (pars) => get('/SoBiz/LoginOut',pars)
/*login:check user is login*/
//const islogin = (pars) => get('/sobiz/islogin', pars)

const SysBaseinfoApi = {
  login,
  logout,
  //islogin,
}

export default SysBaseinfoApi
