const howSum = (targetSum , numbers , memo = {} ) => {
    if(targetSum === 0) return [];
    if(targetSum < 0 ) return null;
    if(targetSum in memo) return memo[targetSum]
    for(const num of numbers){
        const remainder = targetSum - num;
        const res = howSum(remainder , numbers);
       if(res) {
        memo[targetSum] =  [...res , num];
        return memo[targetSum]
       }
    }
    return null;
};


console.log(howSum(7, [2, 3]));  
console.log(howSum(7, [5, 3, 4, 7]));  
console.log(howSum(7, [2, 4]));  
