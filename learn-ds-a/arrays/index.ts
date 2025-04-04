function majorityElement(nums: number[]): number | undefined{
    const counter: {[key: number]: number} = {}

    for(let num of nums) {
        if (counter[num]) {
            counter[num] += 1
        } else {
            counter[num] = 1
        }

        if (counter[num] > nums.length / 2) return num;
    
    }
};

console.log(majorityElement([2,2,1,1]))


