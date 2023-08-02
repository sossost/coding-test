function solution(numbers) {
    
    let result = [];

     numbers.forEach((x,index)=>{
        for(let i = index+1 ; i < numbers.length ; i++){
            result.push(x+numbers[i])
        }
    });
    
    return [...new Set(result)].sort((a,b)=>a-b)
}