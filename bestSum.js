const bestSum = (target , numbers  , memo = {}) => {
    if(target === 0) return [];
    if(target in memo) return memo[target];
    if(target < 0 ) return null;

    let shortestCombination = null;
    for(const num of numbers) {
        const targetSum = target - num;
        let res = bestSum(targetSum , numbers , memo)
        if(res) {
            res = [...res , num];
            if(shortestCombination === null || res.length < shortestCombination.length){
                shortestCombination = res;
            }
            memo[targetSum] = shortestCombination;
        }
        else {
            memo[targetSum] = null;
        }
    }
    return shortestCombination;
}

console.log(bestSum(12, [5, 3, 4, 7,1,12,3]));  
