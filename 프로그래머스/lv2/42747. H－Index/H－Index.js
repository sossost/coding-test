function solution(citations) {
    let lower = citations.sort((a,b)=>a-b).slice(0,citations.length-1)
    let upper = [citations.sort((a,b)=>a-b)[citations.length-1]]
    let i = upper[0]

    while( i > upper.length ){
     if( i === lower[lower.length-1]){
       upper.unshift(lower[lower.length-1])
       lower.pop()
        continue
        
     }
    i--
    }
    
    return i
    
}