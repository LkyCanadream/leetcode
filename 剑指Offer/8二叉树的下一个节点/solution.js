//Author : Lky
//Date : 2019-06-12

/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.parent = parent;
*     this.left = null;
*     this.rigth = null;
* }
*/

function getNextNode(pNode){
	if(pNode == null)
		return pNode;
	if(pNode.right != null){ // 节点右子树不为空，其下一个节点为右子树的最后左子节点
		pNode = pNode.right;
		while(pNode.left != null){
			pNode = pNode.left;
		}
		return pNode;
	}else if(pNode.parent != null && pNode.parent.left == pNode){ //节点右子树为空，并且该节点为父节点的左子节点，其下一个节点为其父节点
		return pNode.parent;
	}else if(pNode.parent != null && pNode.parent.right == pNode){//节点右子树为空，该节点为父节点的右子节点，找到作为左子节点的父节点，下一个节点为该父节点的父节点
		while(pNode.parent != null && pNode.parent.left != pNode){
			pNode = pNode.parent;
		}
		return pNode.parent;
	}else{
		return pNode.parent;
	}
}