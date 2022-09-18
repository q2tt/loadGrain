function loadGrain(levels) {
    let maxRight = -1;
    let maxLeft = -1;
    let left = 0;
    let right = levels.length-1 ;
    let result = 0;


    for(i=0; i<=levels.length - 1; i++ ){
        if(levels[left] > maxLeft){
            maxLeft= levels[left]
        }
        if(levels[right] > maxRight){
            maxRight = levels[right]
        }
        if(maxLeft > maxRight){
            result += maxRight - levels[right]
            right--
        } else {
            result += maxLeft - levels[left]
            left++
        }
    }


    return result
}

console.log(loadGrain([4, 1, 3]))
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]))
console.log(loadGrain([2, 0, 1, 5, 2, 7]))
console.log(loadGrain([2, 4, 2]))
console.log(loadGrain([7, 4]))
console.log(loadGrain([]))
