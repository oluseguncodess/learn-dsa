type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let accum = init
    
    for(let num of nums) {
        accum = fn(accum, num)
    }

    return accum;
};
