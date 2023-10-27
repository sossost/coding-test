function solution(n) {
    let result = Array.from({length:n},()=>[])
    result.map((x,i)=>{
        for(let j = 0 ; j < n ; j ++){
            if(i === j){
                x.push(1)
            } else {            
                x.push(0)
            }
        }
    })
    
    return result
}