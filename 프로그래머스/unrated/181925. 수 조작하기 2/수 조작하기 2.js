function solution(numLog) {
    const controlKeys =[]
    numLog.forEach((x,i)=>{
       controlKeys.push(numLog[i+1]-numLog[i])
    })
    
    const control = {
        "1":"w",
        "-1":"s",
        "10":"d",
        "-10":"a",
    }
    
    return controlKeys.map((x)=>control[x]).join('')
}