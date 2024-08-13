var twoSum = function (nums, target) {
    let temp = nums.length - 1
    for (let i = 0; i < nums.length; i++) {
        let val = target - nums[i]
        let val1 = target - nums[temp]
        if (nums[temp] + nums[i] === target)
            return [i, temp]
        for (let k = temp - 1; k > i; k--) {
            if (val === nums[k]) {
                return [i, k]
            }
            if (val1 === nums[k]) {
                return [k, temp]
            }
        }
    }
};

twoSum(nums = [3, 2, 4], target = 6)