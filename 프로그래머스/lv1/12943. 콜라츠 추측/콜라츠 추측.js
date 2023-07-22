function solution(num) {
    let count = 0
    
    function collatz(n){
        if(n === 1 ) return 0
        count += 1
       return collatz(n%2===0 ? n/2 : n*3+1)
    }
    
    collatz(num);
    
    if(num === 1) return 0
    if(count >500) return -1
    return count
}