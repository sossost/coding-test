function solution(k, tangerine) {
    const result = []
          tangerine.sort().forEach((x,i)=>{
            if(result[x])	{
        	    result[x] = result[x] + 1;
            }else {
                result[x] = 0 + 1;
            }
          })
    const newArr = result.sort((a,b)=>b-a)
    let sum = 0
    
    for(let i = 0 ; i<newArr.length ; i++){
     
        sum += newArr[i]
           if(sum >= k){
            return i+1
        }
    }
}