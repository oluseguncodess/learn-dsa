// leetcode problem
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false
 
    const letters: number[] = Array(26).fill(0)
 
    for (let i = 0; i < s.length; i++) {
         letters[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
         letters[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--
    }
 
    console.log(Array(26).fill(0).toString())

    return true;
 };
 
 isAnagram('anagram', 'nagaram');
 

 