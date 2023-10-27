function solution(n) {
    let x = n;
    let result = [n];
    
    while( x !== 1){
        if( x % 2 === 0){
            result.push(x/2)
            x = x/2
        } else {
            result.push(3*x+1)
            x = 3*x+1
        }
    }
    
    return result
}