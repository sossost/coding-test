function solution(d, budget) {
    let result = 0
    d.sort((a,b)=>a-b);
    let budgetLeft = budget;
    d.forEach((x)=>{
        result += 1
        budgetLeft -= x
          if(budgetLeft<0){
              budgetLeft += x
              result -= 1
              return
          }
    })
    
    return result
}