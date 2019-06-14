//Author : Lky
//Date : 2019-06-12


/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = null;
*     this.rigth = null;
* }
*/
function reConstructBinaryTree(pre,vin){
	if(!pre || pre.length == 0){
		return;
	}
	var treeNode = new TreeNode(pre[0]);
	for(let i = 0;i < pre.length;i++){
		if(vin[i] === pre[0]){
			treeNode.left = reConstructBinaryTree(pre.slice(1,i+1),vin.slice(0,i));
			treeNode.right = reConstructBinaryTree(pre.slice(i+1),vin.slice(i+1));
		}
	}
	return treeNode;
}