//Author : Lky
//Date : 2019-06-02

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = [];
    for(var i = 0;i < nums.length;i++){
        var temp = target - nums[i];
        if(hash[temp] !== undefined)
            return [hash[temp],i];
        hash[nums[i]] = i;
    }
    
};