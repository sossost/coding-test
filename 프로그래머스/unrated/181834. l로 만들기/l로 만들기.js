function solution(myString) {
    return myString.split('').map((x)=>{
        if(x.charCodeAt(0) < 108){
            return "l"
        }
        return x
    }).join('')
}