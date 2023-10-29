function solution(arr, queries) {
    let result = [...arr];
    queries.forEach((x)=>{
       result = result.map((y,i)=> {
           return (i>=x[0] && i<=x[1]) ? y+1 : y
       })
    })
    
    return result
}