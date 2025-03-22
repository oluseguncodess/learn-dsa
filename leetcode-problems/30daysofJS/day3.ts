// leet code 2704. To Be Or Not To Be
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
}
function expect(val: any): ToBeOrNotToBe {

    function toBe(actualValue: any): boolean {
        if (val != actualValue || typeof val !== typeof actualValue) {
            throw new Error("Not Equal")
        }

        return val === actualValue 
    }

    function notToBe(actualValue: any): boolean {
        if (val === actualValue) {
            throw new Error("Equal")
        }

        return val !== actualValue;
    }

    return {toBe: toBe, notToBe: notToBe}

}

console.log(expect(9).toBe(10))