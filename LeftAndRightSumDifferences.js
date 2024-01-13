// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

var leftRightDifference = function(nums) {
    let leftSum = [];
    let rightSum = [];
    let resultSum = [];
    let lsum = 0;
    let rsum = 0;
    for(let i=0; i<nums.length; i++){
        //create left sum
        for(let j=0;j<i; j++){
            lsum += nums[j]
        }
        leftSum.push(lsum);
        lsum = 0;
        //create right sum
        for(let k=i+1; k<nums.length; k++){
            if(k===nums.length){
                rsum = 0
            }else{
                rsum += nums[k]
            }
        }
        rightSum.push(rsum);
        rsum = 0;
    }
        
    //difference
    for(let i=0; i<leftSum.length; i++){
        let res = Math.abs(leftSum[i] - rightSum[i]);
        resultSum.push(res);
    }
    return resultSum;
    
};