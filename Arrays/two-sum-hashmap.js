var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) { // && map.get(complement) !== i
            return [i, map.get(complement)];
        }
    }
    // If no valid pair is found, return an empty array
    return [];
};
//console.log(twoSum([2, 7, 3, 4, 11, 15], 8)); // this case 4 + 4 itself the && map.get(complement) !== i for this role...
//console.log(twoSum([2, 4, 3, 4, 11, 15], 8));


// using only one loop
var twoSumOneLoop = function (arr, target) {
    const map2 = new Map();
    for (let i = 0; i < arr.length; i++) {
        console.log(map2);
        const complement = target - arr[i];
        if (map2.has(complement)) {
            return [map2.get(complement), i];
        }
        map2.set(arr[i], i);
    }
    // Return an empty array if no solution is found
    return [];
};

console.log(twoSumOneLoop([2, 4, 3, 4, 11, 4, 15], 8));