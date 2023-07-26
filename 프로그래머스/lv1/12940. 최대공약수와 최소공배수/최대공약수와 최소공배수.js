function solution(n, m) {
    let a = n > m ? n : m
    let b = n > m ? m : n
    
    const GCD = (a,b)=>{
        for(let i = a ; i>=1 ; i--){
            if(a % i ===0 && b % i ===0){
                return i
            }
        }
    }
    
    const LCM = (a,b)=>{
     return n*m/GCD(a,b)
    }
    
    return [GCD(a,b),LCM(a,b)];
}