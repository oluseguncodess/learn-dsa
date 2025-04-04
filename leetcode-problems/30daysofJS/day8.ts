type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {
        if (functions.length === 0) return x;

        let accum = x;
        for (let i = functions.length; i > 0; i-- ) {
            accum = functions[i - 1](accum)
        }
         return accum;
    }
};