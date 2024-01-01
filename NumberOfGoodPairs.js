// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

var numIdenticalPairs = function(nums) {
    var obj = {};
    let val = 0;
    for(let key of nums){
        if(obj[key]){
            obj[key] += 1
        }else{
            obj[key] = 1
        }
    }
    let values = Object.values(obj);
    for(const key of values){
        val += key* (key-1)/2
    }
    return val
}
