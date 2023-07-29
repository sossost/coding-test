function solution(n) {
    let nMinusTwo = 0
    let nMinusOne = 1
    let nMinusOneCoppy = 1
    
    let result = 0
    for(let i = 2 ; i <=n ; i++ ){
        result = nMinusTwo + nMinusOne
        nMinusOne += nMinusTwo%1234567
        nMinusTwo = nMinusOneCoppy%1234567
        nMinusOneCoppy = nMinusOne
    }
    
    return result%1234567
}