//Author : Lky
//Date : 2019-06-12

//解法1，利用正则
function replaceSpace(str){
	return str.replace(/\s/g,'20%');
}

// 解法2，遍历替换，用额外空间存储
function replaceSpace2(str){
	let resultStr = '';
	for(let i = 0;i < str.length;i++){
		if(str.charAt(i) == ' '){
			resultStr += '20%';
		}else{
			resultStr += str.charAt(i);
		}
	}
	return resultStr;
}

