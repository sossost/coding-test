function solution(absolutes, signs) {
    
    return absolutes.map((x,i)=>{
        const y = signs[i] ? 1 : -1
       return x*y
    }).reduce((acc,cur)=>acc+cur,0);
}