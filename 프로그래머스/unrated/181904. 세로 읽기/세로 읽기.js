function solution(my_string, m, c) {
    let result = [];
    my_string.split('').forEach((x,i)=>{
        if(i%m===c-1){
            result.push(x)
        }
    })
    
    return result.join('')
}