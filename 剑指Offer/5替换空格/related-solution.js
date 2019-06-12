//Author : Lky
//Date : 2019-06-12


function mergeSortArr(arr1,arr2){
	let resultArr = [];
	while(arr1.length && arr2.length){
		if(arr1[0] <= arr2[0]){
			resultArr.push(arr1.shift());
		}else{
			resultArr.push(arr2.shift());
		}
	}
	return resultArr.concat(arr1,arr2);
}
