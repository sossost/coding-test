function solution(a, b, n) {
    let result = 0;
    let remain = n;
    let rest = 0
    while(remain >= a){
        let newGet = ~~(remain / a) * b % 1234567
        rest = remain % a
        result += newGet
        remain = newGet + rest       
        
        console.log(rest,remain,result)
    }
    return result
}