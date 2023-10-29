function solution(a, d, included) {
    let result = 0;
    
    included.forEach((x,i)=>{
       if(x===true) result += a+i*d;
    })
    
    return result
}