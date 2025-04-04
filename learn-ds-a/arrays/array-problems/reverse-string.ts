function reverseString(str: string): string {
    // store string in array
   let reversedArray: string[] = []

    for (let i = str.length; i > 0; i--) {
        reversedArray.push(str[i - 1])
    }

    return reversedArray.join('')
   
}   

console.log(reverseString('olusegun'));
