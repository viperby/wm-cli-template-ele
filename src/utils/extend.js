/**
* this file use for basic check
*/

/* eslint-disable */
/*check string is an e-mail*/
String.prototype.isMail = function () {
	var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
	return reg.test(this);
};
String.prototype.isIdCard = function(){
	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	return reg.test(this);
}
String.prototype.isIdCardCompact = function(){
	let vcity = { 
		11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",
		21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",
		33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",
		42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",
		51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",
		63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外",
	}
	
	//校验日期
	let verifyBirthday = function(year,month,day,birthday)
	{
		var now = new Date();
		var now_year = now.getFullYear();
		//年月日是否合理
		if(birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day)
		{
			//判断年份的范围（3岁到100岁之间)
			var time = now_year - year;
			if(time >= 3 && time <= 100)
			{
				return true;
			}
			return false;
		}
		return false;
	};
	
	let changeFivteenToEighteen = function(card)
	{
		if(card.length == '15')
		{
			var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); 
			var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'); 
			var cardTemp = 0, i;   
			card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6);
			for(i = 0; i < 17; i ++){ 
				cardTemp += card.substr(i, 1) * arrInt[i]; 
			} 
			card += arrCh[cardTemp % 11]; 
			return card;
		}
		return card;
	};
	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	//return reg.test(this)
	if(!reg.test(this)) return false;
	/*省份验证*/
	if(!vcity[this.substr(0,2)]) return false;
	/*生日验证*/
	let birthdayOk = false;
	if(this.length == 15){
		var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
		var arr_data = this.match(re_fifteen);
		var year = arr_data[2];
		var month = arr_data[3];
		var day = arr_data[4];
		var birthday = new Date('19'+year+'/'+month+'/'+day);
		birthdayOk = verifyBirthday('19'+year,month,day,birthday);
	}
	if(this.length == 18){
		var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
		var arr_data = this.match(re_eighteen);
		var year = arr_data[2];
		var month = arr_data[3];
		var day = arr_data[4];
		var birthday = new Date(year+'/'+month+'/'+day);
		birthdayOk = verifyBirthday(year,month,day,birthday);
	}
	if(!birthdayOk) return false;
	/*校验位验证*/
	let card = changeFivteenToEighteen(this);
	if(card.length == '18')
	{
		var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); 
		var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'); 
		var cardTemp = 0, i, valnum; 
		for(i = 0; i < 17; i ++) { 
			cardTemp += card.substr(i, 1) * arrInt[i]; 
		} 
		valnum = arrCh[cardTemp % 11]; 
		if (valnum == card.substr(17, 1)){
			return true;
		}
		return false;
	}
	return false;
}
/*to distinguish between domestic and foreign mobile phone numbers*/
/*not all cases are numbers,ex:when input*/
String.prototype.isCNPhone = function () {
	return (/^1(3|4|5|6|7|8|9)\d{9}$/.test(this));
};
Number.prototype.isCNPhone = function(){
	return (/^1(3|4|5|6|7|8|9)\d{9}$/.test(this));
}
/*remove an element from an array*/
Array.prototype.remove = function (element) {
	if (element && this.indexOf(element) !== -1)
		this.splice(this.indexOf(element), 1);
};
String.prototype.isImage = function(){
	let types = "image/jpg,image/jpeg,png";
	return types.indexOf(this) !== -1;
}
/* eslint-disable */