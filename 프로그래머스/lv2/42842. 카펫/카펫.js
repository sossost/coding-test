function solution(brown, yellow) {
    for(let i = 3 ; i < brown+yellow/3; i++){
        let 면적 = brown+yellow
        if( 면적 % i ===0&& (i-2)*(면적/i-2) === yellow){
            return [(brown+yellow)/i,i]
        }
    }
}