function solution(my_string) {
    let suffix = [];
    for(let i = 0 ; i < my_string.length ; i++ ){
        suffix.push(my_string.slice(-i-1))
    }
    
    return suffix.sort()
    
    
}