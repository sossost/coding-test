function solution(n_str) {
    
    let result = n_str
    
    while(result[0] === '0'){
      result = result.replace('0','')
    }
    
    return result
}