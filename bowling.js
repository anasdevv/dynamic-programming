// it was tough to understand the question, but I think I got it right.
/*
• Given n pins labeled 0, 1, . . . , n − 1
• Pin i has value vi
• Ball of size similar to pin can hit either
– 1 pin i, in which case we get vi points
– 2 adjacent pins i and i + 1, in which case we get vi · vi+1 points
• Once a pin is hit, it can’t be hit again (removed)
• Problem: Throw zero or more balls to maximize total points
• Example: [ −1, 1 , 1 , 1 , 9, 9 , 3 , −3, −5 , 2, 2 ]


*/

const bowling = (pins) => {
    if(pins.length === 0) return 0;
    const func = (i , memo = {}) => {
        if( i >= pins.length - 1) return 0;
        if(memo[i]) return memo[i];
        else {
            memo[i] = Math.max(
                func(i+1,memo) , // see if we can skip this pin
                pins[i] + func(i + 1, memo),  // see if we can bowl this pin separately 
                pins[i] * pins[i+1] +func(i + 2, memo) // see if we can bowl this pin and the next pin together
                );
                return memo[i];
        }
    } 
    return func(0);
}
console.log(bowling([1,1,9,9,2,-5,-5]));