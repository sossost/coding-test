function solution(s) {
    let count = -1;

    return [...s].map((x)=>{
        count += 1;
        if(x===" "){
            count = -1;
            return x
        }
        return count%2 === 0 ? x.toUpperCase() : x.toLowerCase()
    }).join('')
}