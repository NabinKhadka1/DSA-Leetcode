// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]


var getConcatenation = function(nums) {
    let ans = [...nums];
    const n = nums.length;
    for(let i=0;i<n;i++){
        ans[i+n] = nums[i];
    }
    return ans;
};

// Oneliner
// var getConcatenation = function(nums) {
//     return [...nums,...nums];
// };