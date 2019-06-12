//Author : Lky
//Date : 2019-06-12


/**
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function listReverse(head){
	let arr = [];
	while(head != null){
		arr.unshift(head.val);
		head = head.next;
	}
	return arr;
}