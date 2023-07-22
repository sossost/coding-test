function solution(a, b) {
    let x = a>b ? a : b;
    let y = a>b ? b : a;
    
    return Array.from({length:x-y+1},(v,i)=>y+i).reduce((acc,cur)=>acc+cur,0);
}