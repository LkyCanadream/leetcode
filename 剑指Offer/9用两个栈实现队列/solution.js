//Author : Lky
//Date : 2019-06-14

//栈结构
function Stack(){
	let items = [];
	this.push = function(item){
		items.push(item);
	}
	this.pop = function(){
		return items.pop();
	}
	this.isEmpty = function(){
		return items.length == 0;
	}
}
//用栈实现队列
function Queue(){
	var stack1 = new Stack();
	var stack2 = new Stack();
	this.push = function(item){
		stack1.push(item);
	}
	this.pop = function(){
		if(stack1.isEmpty() && stack2.isEmpty()){
			throw new Error("Queue is empty");
		}
		if(stack2.isEmpty()){
			while(!stack1.isEmpty()){
				stack2.push(stack1.pop());
			}
		}
		return stack2.pop();
	}
}

