//Author : Lky
//Date : 2019-06-04

//解法1，暴力解决，复杂度为O(n^2)
function searchItem(target,array){
	for(let arr of array){
		for(let j of arr){
			if(j === target){
				return true;
			}
		}
	}
	return false;
}

//解法2，二分查找，复杂度为O(nlog2n)
function searchItem2(target,array){
	for(let arr of array){
		let start = 0,end = arr.length - 1;
		while(start <= end){
			let mid = Math.floor((start+end)/2);
			if(target < arr[mid]){
				end = mid -1;
			}else if(target > arr[mid]){
				start = mid + 1;
			}else{
				return true;
			}
		}
	}
	return false;
}


//解法3，用右上角的数进行比较，若大于target，删除那一列，若小于target，则删掉那一行;也可以是左下角
function searchItem3(target,array){
	let rows = array.length,columns = array[0].length;
	let tempRow = 0, tempColumn = array[0].length - 1;
	let rightTopItem;
	while(tempRow < rows && tempColumn >= 0){
		rightTopItem = array[tempRow][tempColumn];
		if( rightTopItem === target){
			return true;
		}else if(rightTopItem > target){
			tempColumn--;
		}else{
			tempRow++;
		}
	}
	return false;
}


//解法4，使用js自带的some方法
function searchItem4(target,array){
	return array.some(arr=>arr.some(item=>item === target));
}
