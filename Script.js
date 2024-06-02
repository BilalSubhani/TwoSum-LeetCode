var twoSum = function(nums, target) {
    const map = new Map()
    for(let i=0; i< nums.length; i++){
       const comp = target - nums[i]
       if(map.has(comp))
        return [map.get(comp), i]

        map.set(nums[i], i) 
    }
    return []
};

// You can use var instead of const when creating map and comp, it will come at the cost of run-time. 
