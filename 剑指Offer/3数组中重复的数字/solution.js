//Author : Lky
//Date : 2019-06-04

function repeatNum(arr){
	for(let i = 0;i < arr.length;i++){
		if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
			return arr[i];
		}
	}
}