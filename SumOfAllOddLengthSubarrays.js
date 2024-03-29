// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

// A subarray is a contiguous subsequence of the array.

// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

var sumOddLengthSubarrays = function (arr) {
    let outputArray = [];
    let flattedArray = [];
    let sum = 0;
    for (let j = 1; j <= arr.length; j =j+2) {
        for (let i = 0; i < arr.length; i++) {
            if (arr.slice(i, i + j).length === j) {
                outputArray.push(arr.slice(i, i + j));
            }
        }
    }
    flattedArray = outputArray.flat(Infinity);
    for (let i = 0; i < flattedArray.length; i++) {
        sum += flattedArray[i]
    }
    return sum;
};