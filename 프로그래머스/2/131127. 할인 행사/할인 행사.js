function solution(want, number, discount) {
    let totalWantArr = [];
    number.forEach((x,i)=>{
       for(let j = 0 ; j < x ; j++){
           totalWantArr.push(want[i])
       }
    });
    
    let result = 0
    
    for(let i = 0 ; i <= discount.length-10 ; i++){
        let tenDay = discount.slice(i,i+10).sort()
        
        if(JSON.stringify(tenDay) === JSON.stringify(totalWantArr.sort())){
            result += 1 
        }
    }
    
    return result
}