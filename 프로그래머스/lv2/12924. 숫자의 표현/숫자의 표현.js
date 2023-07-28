function solution(n) {
    const divisor = (n)=>{
        let result = []
        for(let i = 1 ; i<=n ; i++){
            if(n%i===0 && i%2!==0){
                result.push(i) 
            }
        
        }
        return result
    }
    
  return divisor(n).length
   
}