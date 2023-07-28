function solution(number) {
    let result = 0
    for(let i = 0 ; i<number.length; i++){
        for(let j = i; j<number.length ; j++){
            for(let k = j; k<number.length ; k++){
                if(i !== j && j !==k && i !== k && number[i]+number[j]+number[k] === 0){
                     result += 1
                }
            }
        }
    }
    return result
}