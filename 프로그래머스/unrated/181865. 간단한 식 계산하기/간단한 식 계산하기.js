function solution(binomial) {
    const arr = binomial.split(' ')
    const a = +arr[0];
    const b = +arr[2];
    const opKey = arr[1]
    const op = {
        "+" : (a,b)=> a+b,
        "-" : (a,b)=> a-b,
        "*" : (a,b)=> a*b,
    }
    
    return op[opKey](a,b)
    
}