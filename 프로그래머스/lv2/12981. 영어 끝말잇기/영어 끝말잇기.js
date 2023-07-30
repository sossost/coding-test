function solution(n, words) {
    let stack = [];
    for (let i = 0 ; i<words.length ; i++){
        let 스택끝요소 = stack[stack.length-1];
                    

        
        if(stack.length>0 && words[i][0] === 스택끝요소[스택끝요소.length-1]){
            stack.pop()
            stack.push(words[i])
        }else{
            stack.push(words[i])
        }
        
                if(stack.length > 1 || words.slice(0,i+1).filter((x)=>x === words[i]).length>1){
           return [i%n+1,Math.ceil((i+1)/n)]
        }
    }
    return [0,0]
}