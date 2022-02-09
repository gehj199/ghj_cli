// const colorArray=['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige',
// 	'bisque', 'black', 'blancedalmond', 'blue','blueviolet', 'brown', 'burlywood',
// 	 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 
// 	  'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 
// 		 'darkkhaki', 'darkmegenta', 'darkolivegreen', 'darkorange', 'darkorchid',
// 			'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkturquoise',
// 			 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dodgeblue' ];
//判断引用类型的具体类型
export function objectType(variable) {
	var obj = Object.prototype.toString;
	var type = obj.call(variable);
	switch (type) {
		case '[object Array]':
			return 'array';
			break;
		case '[object String]':
			return 'string';
			break;
		case '[object Object]':
			return 'object';
			break;
		case '[object Null]':
			return 'null';
			break;
		case '[object Undefined]':
			return 'undefined';
			break;
		case '[object Boolean]':
			return 'boolean';
			break;
		case '[object Number]':
			return 'number';
			break;
		case '[object Function]':
			return 'function';
			break;
		case '[object Date]':
			return 'date';
			break;
		default:
			break;
	}
}

/***********/
//快速排序
export function quickSort(arr, sortOrder = 'asc') {
	if (objectType(arr) != 'array') {
		return false;
	} else {
		if (arr.length === 1 || arr.length === 0) {
			return arr;
		} else {
			var symbol = arr.splice(0, 1);
			var left = [];
			var right = [];
			if (sortOrder == 'asc') {
				arr.forEach((item) => {
					if (item < symbol)
						left.push(item);
					else
						right.push(item);
				});
			} else if (sortOrder == 'desc') {
				arr.forEach((item) => {
					if (item < symbol)
						right.push(item);
					else
						left.push(item);
				});
			}
			return quicksort(left, sortOrder).concat(symbol, ...quicksort(right, sortOrder));
		}
	}
}
//归并排序
export function mergeSort(array) {
	if (array.length == 1) {
		return array;
	}
	let m = Math.floor(array.length / 2);
	let B = mergeSort(array.slice(0, m));
	let C = mergeSort(array.slice(m, array.length));
	let A_sorted = merge(B, C);
	return A_sorted;
}

function merge(B, C) {
	let i = 0;
	let j = 0;
	let D = [];
	while (i < B.length && j < C.length) {
		if (B[i] < C[j]) {
			D.push(B[i++])
		} else {
			D.push(C[j++]);
		}
	}
	while (i < B.length)
		D.push(B[i++]);
	while (j < C.length)
		D.push(C[j++])
	return D;
}

/*****排序结束******/

/*****查找******/

/*****查找结束******/

/*****实现深拷贝******/

// lmran
function copyFunction(func) {
	let fnStr = func.toString()
	return func.prototype ? eval(`(${fnStr})`) : eval(fnStr)
}

export function deepCopy(obj, cache = []) {
	if (typeof obj === 'function') {
		return copyFunction(obj)
	}
	if (obj === null || typeof obj !== 'object') {
		return obj
	}

	if (Object.prototype.toString.call(obj) === '[object Date]') return new Date(obj)
	if (Object.prototype.toString.call(obj) === '[object RegExp]') return new RegExp(obj)
	if (Object.prototype.toString.call(obj) === '[object Error]') return new Error(obj)

	const item = cache.filter(item => item.original === obj)[0]
	if (item) return item.copy

	let copy = Array.isArray(obj) ? [] : {}
	cache.push({
		original: obj,
		copy
	})

	Object.keys(obj).forEach(key => {
		copy[key] = deepCopy(obj[key], cache)
	})

	return copy
}

/*****数组扁平化******/

export function flattenArr(arr) {
	let result = [];
	arr.forEach((item, index, arr) => {
		if (Array.isArray(item)) {
			result = result.concat(flatten(item))
		} else {
			result.push(item);
		}
	})
	return result;
}

/*****常用正则******/

export function isEmail(str) { //是否是邮箱
	//Email正则
	var emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	//输出 true
	return !str ? false : emailPattern.test(str);
}


export function isPhone(str) { //是否是手机号
	str.substring(str.length-11)
	var phonePattern = /^(1[3-9]\d{9})$/;
	return !str ? false : phonePattern.test(str);
}

export function isIdCard(str) { //是否是身份证号
	var IdCardPattern =
		/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[[1-9])|(10)|(11)|(12))(([0-2][1-9])|(10)|(20)|(30)|(31))\d{3}[0-9Xx]$/
	return !str ? false : IdCardPattern.test(str)
}

export function isWeChat(str) { //是否微信号
	var weChatPattern = /^[a-zA-Z]([-_0-9a-zA-Z]{5,19})+$/;
	return !str ? false : weChatPattern.test(str);
}

export function isQQ(str) { //是否是QQ
	var QQPattern = /^[1-9][0-9]{4,10}$/;
	return !str ? false : QQPattern.test(str);
}

export function isPlateNumber(str) { //是否是车牌号
	var carPattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
	return !str ? false : carPattern.test(str);
}

export function containCN(str) { //是否包含中文字符
	var cnPattern = /[\u4E00-\u9FA5]/;
	return !str ? false : cnPattern.test(str);
}

export function UpperMoney(money) { //人民币转换中文表示
	//数字
	let cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
	//基本单位
	let cnIntRadice = new Array('', '拾', '佰', '仟');
	//对应整数部分扩展单位
	let cnIntUnits = new Array('', '万', '亿', '兆');
	//对应小数部分
	let cnDecUnits = new Array('角', '分', '毫', '厘');
	//整数金额后面跟的字符
	let cnInteger = '整';
	//整数完以后的单位
	let cnIntLast = '元';
	//整数部分
	let integerNum;
	//小数部分
	let decimalNum;
	//结果字符串
	let CNstr = '';
	if (isNaN(Number(money))) {
		return '';
	}
	if (money == 0) {
		CNstr = cnNums[0] + cnIntLast + cnInteger;
		return CNstr;
	}
	money = money.toString();
	if (money.indexOf('.') == -1) {
		integerNum = money;
		decimalNum = '';
	} else {
		let parts = money.split('.');
		integerNum = parts[0];
		decimalNum = parts[1].substr(0, 4);
	}
	if (parseInt(integerNum, 10) > 0) {
		var zeroCount = 0;
		var IntLen = integerNum.length;
		for (var i = 0; i < IntLen; i++) {
			var n = integerNum.substr(i, 1);
			var p = IntLen - i - 1;
			var q = p / 4;
			var m = p % 4;
			if (n == '0') {
				zeroCount++;
			} else {
				if (zeroCount > 0) {
					CNstr += cnNums[0];
				}
				//归零
				zeroCount = 0;
				CNstr += cnNums[parseInt(n)] + cnIntRadice[m];
			}
			if (m == 0 && zeroCount < 4) {
				CNstr += cnIntUnits[q];
			}
		}
		CNstr += cnIntLast;
	}
	//小数部分
	if (decimalNum != '') {
		var decLen = decimalNum.length;
		for (var i = 0; i < decLen; i++) {
			var n = decimalNum.substr(i, 1);
			if (n != '0') {
				CNstr += cnNums[Number(n)] + cnDecUnits[i];
			}
		}
	}
	if (CNstr == '') {
		CNstr += cnNums[0] + cnIntLast + cnInteger;
	} else if (decimalNum == '') {
		CNstr += cnInteger;
	}
	return CNstr;
}

// export function isColor(str){ //是否正确颜色代码
// 	var str=str.trim();
// 	var rgbPattern = /^rgb\(\s*(\d+)\s*\,\s*(\d+)\s*\,\s*(\d+)\s*\)$/;
// 	var hexPattern = /^#[0-9a-fA-F]{6}$/;
// 	var hexPattern2 = /^#[0-9a-fA-F]{3}$/;
// 	if(rgbPattern.test(str)){
// 		var array=str.match(rgbPattern);
// 		if(array){
// 			for(var i=1;i<4;i++){
// 				if(array[i]<0||array[i]>255){
// 					return false;
// 				}
// 			}
// 			return true;
// 		}else{
// 			return false;
// 		}		
// 	}else if(hexPattern.test(str) || hexPattern2.test(str)){
// 		return true;
// 	}else if(str.toLowerCase() in colorArray){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }
/*****正则结束******/

/*****格式化日期时间******/

function getTime(str) {
	let time;
	if (str instanceof Date == true) {
		time = str;
	} else {
		time = new Date(str);
	}
	return time;
}

export function transforNumber(num) {
	return num > 9 ? num : '0' + num;
}

export function formatterDate(str = Number(new Date().valueOf()), concat) { //只获取日期
	let time = getTime(str);
	let year = time.getFullYear();
	let month = transforNumber(time.getMonth() + 1);
	let date = transforNumber(time.getDate());
	concat = concat || '-';
	let result = year + concat + month + concat + date;
	return result;
}

export function formatterTime(str = Number(new Date().valueOf())) {
	let time = getTime(str);
	let hour = time.getHours();
	let minutes = transforNumber(time.getMinutes());
	let seconds = transforNumber(time.getSeconds());
	let result = hour + ':' + minutes + ':' + seconds;
	return result;
}

export function formatterDateTime(str = Number(new Date().valueOf())) { //获取日期和时间
	var result = formatterDate(str) + ' ' + formatterTime(str);
	return result;
}

/*****格式化日期时间******/

/*****是否支持webp******/

//获取ios版本
function get_ios_version(){
	var ua = navigator.userAgent.toLowerCase();
	var version = null;
	if (ua.indexOf("like mac os x") > 0) {
			var reg = /os [\d._]+/gi;
			var v_info = ua.match(reg);
			version = (v_info + "").replace(/[^0-9|_.]/ig, "").replace(/_/ig, "."); //得到版本号9.3.2或者9.0
			version = parseInt(version.split('.')[0]); // 得到版本号第一位
	}

	return version;
}

export function check_webp_feature(feature, callback) {
	var kTestImages = {
			lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
			lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
			alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
			animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
	};
	var img = new Image();
	img.onload = function () {
			var result = (img.width > 0) && (img.height > 0);
			callback(feature, result);
	};
	img.onerror = function () {
			callback(feature, false);
	};
	img.src = "data:image/webp;base64," + kTestImages[feature];
}

export function getWebp(){
	return new Promise(function(resolve){
		check_webp_feature('lossy', (feature,result)=>{
			resolve(result);
		});
	})
}



/*****是否支持webp结束******/


