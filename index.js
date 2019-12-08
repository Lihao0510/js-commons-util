/**
 * 数组并集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 */
export const mergeArray = (arrOne, arrTwo) => {
  return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)));
};

/**
 * 数组交集,只支持一维数组
 * @param {Array} arrOne
 * @param {Array} arrTwo
 */
export const findArrayDump = (arrOne, arrTwo) => {
  return arrOne.filter(v => arrTwo.includes(v));
};

/**
 * 数组合并,目前合并一维
 * @param {Array} arrOne 数组
 * @param {Array} arrTwo 数组
 */
export const arrConcat = (arrOne, arrTwo) => {
	return [...arrOne, ...arrTwo]
}

/**
 * 数组求和
 * @param {Array} arr 数组
 */
export const arrSum = arr => {
	return arr.reduce((prev, cur)=> {
		return prev + cur
	}, 0)
}

/**
 * 数组是否包含某值
 * @param {Array} arr 数组
 * @param {}  value 值,目前只支持 String,Number,Boolean
 */
export const arrIncludeValue = (arr,  value) => {
	return arr.includes( value)
}

/**
 * 数组去重
 * @param {Array} arr  数组
 */
export const arrRemoveRepeat = arr => {
	return Array.from(new Set(arr))
}

/**
 * 判断是否是数组
 * @param {Array}} arr 数组
 */
export const arrJudge = arr => Array.isArray(arr)

/**
 *  判断是否是数字
 * @param {Number} data
 */
export const checkNum = data => /^\d{1,}$/g.test(data)

/**
 *  判断是否是字母
 * @param {Number} data
 */
export const checkLetter = data => /^[a-zA-Z]+$/g.test(data)

/**
 *  判断是否全部是小写字母
 * @param {Number} data
 */
export const checkLowercaseLetter = data => /^[a-z]+$/g.test(data)

/**
 *  判断是否是大写字母
 * @param {Number} data
 */
export const checkCapitalLetter = data => /^[A-Z]+$/g.test(data)

/**
 * 判断是否是字母或数字
 * @param {Number || String} data  字符或数字
 */
export const checkNumOrLetter = data => /^[0-9a-zA-Z]*$/g.test(data)

/**
 * 判断是否是中文
 * @param {String} data  中文
 */
export const checkChinese = data => /^[\u4E00-\u9FA5]+$/g.test(data)

/**
 * 判断是否是中文,数字或字母
 * @param {String} data  中文,数字或字母
 */
export const checkChineseNumberLettter = data => /^[a-zA-Z0-9\u4e00-\u9fa5]+$/g.test(data)

/**
 * 判断是否是邮箱地址
 * @param {String} data
 */
export const checkEmail = data => {
	const reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g
	if (reg.test(data)) return true
}

/**
 * 判断是否是手机号，只要是13,14,15,16,17,18,19开头即可
 * @param {String} data
 */
export const checkTelphone = data => {
	const reg = /^((\+|00)86)?1[3-9]\d{9}$/g
	if (reg.test(data)) return true
}

/**
 * 判断是否是正确的网址
 * @param {String} url 网址
 */
export const checkUrl = url => {
	const a = document.createElement('a')
	a.href = url
	return [
		/^(http|https):$/.test(a.protocol),
		a.host,
		a.pathname !== url,
		a.pathname !== `/${url}`
	].find(x => !x) === undefined
}

/**
 * 判断是浏览器内核
 */
export const checkBrowser = () => {
	const u = navigator.userAgent;
	const obj = {
		trident: u.indexOf("Trident") > -1, //IE内核
		presto: u.indexOf("Presto") > -1, //opera内核
		webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
		gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
	}
	return Object.keys(obj)[Object.values(obj).indexOf(true)]
};

/**
 * 判断是终端类型,值有ios,android,iPad
 */
export const checkIosAndroidIpad = () => {
	const u = navigator.userAgent;
	const obj = {
		ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
		android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
		iPad: u.indexOf("iPad") > -1, //是否iPad
	}
	return Object.keys(obj)[Object.values(obj).indexOf(true)]
};

/**
 * 判断是否是微信,qq 或 uc
 */
export const checkWeixinQqUc = () => {

	const u = navigator.userAgent;
	const obj = {
		weixin: u.indexOf("MicroMessenger") > -1, //是否微信
		qq: u.match(/QQ/i) == "qq"&&!u.indexOf('MQQBrowser') > -1, //是否QQ
		uc: u.indexOf('UCBrowser') > -1
	}
	return Object.keys(obj)[Object.values(obj).indexOf(true)]
};

/**
 * 检查是否是 IphoneX
 */
export const checkIsIphoneX = () => {
	const u = navigator.userAgent;
	const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	if (isIOS && screen.height >= 812) {
		return true;
	}
};

/**
 * 格式化文件单位
 * @param {String || Number} size  文件大小(kb)
 */
export const fileFormatSize = size => {
	var i
	var unit = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
	for (i = 0; i < unit.length && size >= 1024; i++) {
		size /= 1024
	}
	return (Math.round(size * 100) / 100 || 0) + unit[i]
}

/**
 * 判断两个对象是否相等,目前只支持对象值为简单数据类型的判断
 * @param {Object} oneObj  对象
 * @param {Object} twoObj 对象
 */
export const objIsEqual = (oneObj, twoObj) => {
	const aProps = Object.getOwnPropertyNames(oneObj);
	const bProps = Object.getOwnPropertyNames(twoObj);

	if (aProps.length != bProps.length) {
		return false;
	}

	for (let i = 0; i < aProps.length; i++) {
		let propName = aProps[i];
		let propA = oneObj[propName];
		let propB = twoObj[propName];
		if ( propA !== propB) {
			return false;
		}
	}
	return true;
}

/**
 * 对象深度克隆,
 * JSON.stringify深度克隆对象
 * 无法对函数 、RegExp等特殊对象的克隆,
 * 会抛弃对象的constructor,所有的构造函数会指向Object
 * 对象有循环引用,会报错
 * @param {Object}  obj 克隆的对象
 */
export const objDeepClone = obj => {
	return clone(obj)
}

const isType = (obj, type) => {
	if (typeof obj !== 'object') return false;
	// 判断数据类型的经典方法：
	const typeString = Object.prototype.toString.call(obj);
	let flag;
	switch (type) {
		case 'Array':
			flag = typeString === '[object Array]';
			break;
		case 'Date':
			flag = typeString === '[object Date]';
			break;
		case 'RegExp':
			flag = typeString === '[object RegExp]';
			break;
		default:
			flag = false;
	}
	return flag;
};

/**
 * deep clone
 * @param  {[type]} parent object 需要进行克隆的对象
 * @return {[type]}        深克隆后的对象
 */
const clone = parent => {
	// 维护两个储存循环引用的数组
	const parents = []
	const children = []

	const _clone = parent => {
		if (parent === null) return null
		if (typeof parent !== 'object') return parent

		let child, proto

		if (isType(parent, 'Array')) {
			// 对数组做特殊处理
			child = []
		} else if (isType(parent, 'RegExp')) {
			// 对正则对象做特殊处理
			child = new RegExp(parent.source, getRegExp(parent))
			if (parent.lastIndex) child.lastIndex = parent.lastIndex
		} else if (isType(parent, 'Date')) {
			// 对Date对象做特殊处理
			child = new Date(parent.getTime())
		} else {
			// 处理对象原型
			proto = Object.getPrototypeOf(parent)
			// 利用Object.create切断原型链
			child = Object.create(proto)
		}

		// 处理循环引用
		const index = parents.indexOf(parent)

		if (index !== -1) {
			// 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
			return children[index]
		}
		parents.push(parent)
		children.push(child)

		for (const i in parent) {
			// 递归
			child[i] = _clone(parent[i])
		}

		return child
	}
	return _clone(parent)
}

/**
 * localStorage 存贮
 * 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
 * @param {String} key  属性
 * @param {Object} value 值
 */
export const localStorageSet = (key, value) => {
	if (typeof (value) === 'object') value = JSON.stringify(value)
	localStorage.setItem(key, value)
}

/**
 * localStorage 获取
 * @param {String} key  属性
 */
export const localStorageGet = (key) => {
	return JSON.parse(localStorage.getItem(key))
}

/**
 * localStorage 移除
 * @param {String} key  属性
 */
export const localStorageRemove = (key) => {
	localStorage.removeItem(key)
}

/**
 * localStorage 存贮某一段时间失效
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param {String} expire 过期时间,毫秒数
 */
export const localStorageSetExpire = (key, value, expire) => {
	if (typeof (value) === 'object') value = JSON.stringify(value)
	localStorage.setItem(key, value)
	setTimeout(() => {
		localStorage.removeItem(key)
	}, expire)
}

/**
 * cookie 存贮
 * @param {String} key  属性
 * @param {*} value  值
 * @param String expire  过期时间,单位天
 */
export const cookieSet = (key, value, expire) => {
	const d = new Date()
	d.setDate(d.getDate() + expire)
	document.cookie = `${key}=${value};expires=${d.toGMTString()}`
}

/**
 * cookie 获取
 * @param {String} key  属性
 */
export const cookieGet = (key) => {
	const cookieStr = unescape(document.cookie)
	const arr = cookieStr.split('; ')
	let cookieValue = ''
	for (var i = 0; i < arr.length; i++) {
		const temp = arr[i].split('=')
		if (temp[0] === key) {
			cookieValue = temp[1]
			break
		}
	}
	return cookieValue
}

/**
 * cookie 删除
 * @param {String} key  属性
 */
export const cookieRemove = (key) => {
	document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
}

/**
 * 判断字符是否包含某值
 * @param {String} str 字符
 * @param {String} value 字符
 */
export const strInclude = (str, value) => {
	return str.includes(value)
}

/**
 * 全局替换某个字符为另一个字符
 * @param {String} str 字符
 * @param {String} valueOne 包含的字符
 * @param {String} valueTwo 要替换的字符,选填
 */
export const strReplace = (str, valueOne, valueTwo) => {
	return str.replace(new RegExp(valueOne,'g'), valueTwo)
}

/**
 * 将字母全部转化成大写
 * @param {String} str 字符
 */
export const strToCapital = (str) => {
	return str.toUpperCase()
}

/**
 * 将字母全部转化成小写
 * @param {String} str 字符
 */
export const strToLowercase = (str) => {
	return str.toLowerCase()
}

/**
 * 将字母全部转化成以大写开头
 * @param {String} str 字符
 */
export const strToCapitalLetter = (str) => {
	const strOne = str.toLowerCase()
	return strOne.charAt(0).toUpperCase() + strOne.slice(1)
}

/**
 * 节流
 * @param {*} func 执行函数
 * @param {*} delay 节流时间,毫秒
 */
export const throttle = function(func, delay) {
	let timer = null
	return function() {
		if (!timer) {
			timer = setTimeout(() => {
				func.apply(this, arguments)
				// 或者直接 func()
				timer = null
			}, delay)
		}
	}
}

/**
 * 防抖
 * @param {*} fn 执行函数
 * @param {*} wait 防抖时间,毫秒
 */
export const debounce = function(fn, wait) {
	let timeout = null
	return function() {
		if (timeout !== null) clearTimeout(timeout)// 如果多次触发将上次记录延迟清除掉
		timeout = setTimeout(() => {
			fn.apply(this, arguments)
			// 或者直接 fn()
			timeout = null
		}, wait)
	}
}

/**
 *  获取 url 后面通过?传参的参数
 * @param {String} name
 */
export function getQueryString(name) {
	const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
	const url = window.location.href
	const search = url.substring(url.lastIndexOf('?') + 1)
	const r = search.match(reg)
	if (r != null) return unescape(r[2])
	return null
}
