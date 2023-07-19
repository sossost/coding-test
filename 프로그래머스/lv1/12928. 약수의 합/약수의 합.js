function solution(n) {
 
    return n !== 0 ? Array.from({length:n},(v,i)=>i+1).filter((x)=>n%x===0).reduce((v,i)=>v+=i) : 0
}