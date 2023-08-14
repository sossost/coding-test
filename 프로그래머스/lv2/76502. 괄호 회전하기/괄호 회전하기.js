function solution(s) {
    const sArr = [...s]
    const obj = {
        "}" : "{",
        ")" : "(",
        "]" : "[",
    }
    
    let result = 0
    
    for(let j = 0; j< s.length ; j++){
        sArr.unshift(sArr[sArr.length-1])
        sArr.pop()
        

        let stack = []
        for(let i = 0 ; i < sArr.length ; i++){
            if(stack.length>0 && stack[stack.length-1] === obj[sArr[i]] ){
               stack.pop()
            }else{
               stack.push(sArr[i])
            }
        }
        
        
        if(stack.length === 0){
            result++
        }
    }
        
    return result;
}