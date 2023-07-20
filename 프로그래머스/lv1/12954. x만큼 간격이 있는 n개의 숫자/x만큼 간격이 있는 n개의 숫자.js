function solution(x, n) {
    return Array.from({length:n},(v,i)=>i+1).map((n)=>n*x)
}