function groupAnagrams(strs: string[]): string[][] {
    let hashMap = {};

    for ( let s of strs) {
        let pattern: string = s.split('').sort().join('');

       if(hashMap[pattern]) {
            hashMap[pattern].push(s)
       } else {
        hashMap[pattern] = [s]
       }
    }

    return []
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))