function solution(num_list) {
    const oddSum = num_list.filter((_,i)=>i%2===1).reduce((a,c)=>a+c,0)
    const evenSum = num_list.filter((_,i)=>i%2===0).reduce((a,c)=>a+c,0)
    
    return oddSum > evenSum ? oddSum : evenSum
}