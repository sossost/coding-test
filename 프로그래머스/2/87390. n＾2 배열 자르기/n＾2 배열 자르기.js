function solution(n, left, right) {
    let resultArr = [];
    
    let startColumn = ~~(left/n)+1
    let endColumn = ~~((right+1)/n)+1
    
    let omitedColumn = n*(startColumn-1)
    
    console.log(endColumn)
    
    
    for(let i = startColumn ; i <= ~~((right+1)/n)+1 ; i++){
        for(let j = 1 ; j <= n ; j++){
            if(j<=i){
                resultArr.push(i)
            } else {
                resultArr.push(j)
            }
        }
    }
    
    console.log(resultArr)
    
    return resultArr.slice(left-omitedColumn,right-omitedColumn+1)
}