`
https://leetcode.com/problems/third-maximum-number/

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1

Example 2:
Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.]

Example 3:
Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
 
`;

const fun = (nums) => {
  const abc = nums.filter((e, i) => nums.indexOf(e) === i);
  if (abc.length >= 3) {
    abc.sort((a, b) => b - a);
    return abc[2];
  } else return Math.max(...nums);
};

// let nums = [1]
let nums = [19, -10, 20, 14, 2, 16, 10];
console.log("----->", fun(nums));

//accept in leet code