function solution(intStrs, k, s, l) {
    let result = [];
    
    intStrs.forEach((x)=>{
        const tn = +x.slice(s,s+l)
        if(k<tn){
            result.push(tn)
        }
    })
    return result;
}