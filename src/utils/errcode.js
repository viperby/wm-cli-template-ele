export default {
	System:{
		NoAuth: "您没有足够的权限获取相关内容",
		RequiredArgs: '缺少必要的参数',
    NoMatchRecord: '找不到符合条件的记录',
    DuplicateObj: '存在重复的记录',
    BadRequestArgs: '传入的参数数据格式不符',
	},
	AccountApp:{
		AcntRegisted:"对不起，该账号已被注册",
		ErrOriginPassword: '原密码不正确',
    NoSamePwd: '两次密码不一致',
    NoChangePwd: '密码没有改变',
    PhoneRegisted: '此手机号已被其他用户使用',
		ErrPassword: '密码错误',
		ExistsBindOpenAcnt: '此账号已被绑定',
    NoBindWechat: '此账号未绑定微信',
    NoCaptcha: '缺少验证码',
    ErrCaptcha: '验证码不正确',
    InvalidCaptcha: '验证码已失效，请重新获取',
	},
	UserManageApp: {
		NoMatchAcnt: '找不到此账号注册信息',
	},
	MedicalApp:{
		WorkScheduleExists: "对不起，当前日期已被排班",
		ExistsRelation: '已存在重复的关联记录',
    NoExistsData: '数据不存在，请刷新后重试',
    NoExistsDoctorWorkSchedule: '该预约日期不存在医生排班信息',
	}
}