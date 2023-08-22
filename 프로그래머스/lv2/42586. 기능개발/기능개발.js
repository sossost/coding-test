function solution(progresses, speeds) {
    let newArr = [...progresses]
    let result = []
    let deployAmount = 0
    while(newArr.length > 0){
        if(newArr[0] >= 100){
            newArr.shift()
            speeds.shift()
            deployAmount++
        }else if(newArr[0] < 100 && deployAmount>0){
            result.push(deployAmount)
            deployAmount = 0
        } else {
            newArr = newArr.map((x,i)=>x+speeds[i])
        }
    }
    result.push(deployAmount)
    
    return result
}