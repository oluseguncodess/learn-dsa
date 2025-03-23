type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number
}

function createCounter(init: number): Counter {
    let currentValue = init;

    function increment(): number {
       return currentValue++;
    }

    function decrement(): number {
       return currentValue--;
    }

    function reset(): number {
       return currentValue = init;
    }

    return {increment: increment, decrement: decrement, reset: reset}
} 