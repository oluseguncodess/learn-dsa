function palindromee(str: string): boolean{
    // turn string into an array and reverse it and turn back to string
    let reverseString = str.split('').reverse().join('')

    // check if the reverse string equals the normal string
    let palindromeChecker = str === reverseString ? true : false

    return palindromeChecker;
}

console.log(palindromee('Hello'))

// Two-pointer approach
function palindrome(str: string): boolean {
    let left = 0, right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(palindrome('abbebba'))