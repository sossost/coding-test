function solution(a, b) {
    function checkOdd(a,b){
        let A = 1;
        let B = 1;
        if(a%2===1) A=-1
        if(b%2===1) B=-1
        
        return A+B
    }
    
    const checkResult = checkOdd(a,b)
    
    if(checkResult === -2) return a**2+b**2
    if(checkResult === 0) return 2*(a+b)
    if(checkResult === 2) return a-b>0 ? a-b : b-a
}