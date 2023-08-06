function solution(food) {
    let str = 0
    for(let i = food.length-1 ; i > 0; i--){
      str = i.toString().repeat(~~food[i]/2) + str + i.toString().repeat(~~food[i]/2)
    }
    
    return str
}