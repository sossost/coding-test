function solution(array, commands) {
    let result = [];
    
    for(let i = 0 ; i<commands.length;i++){
        let currentCommand = commands[i]
        result.push(array.slice(currentCommand[0]-1,currentCommand[1]).sort((a,b)=>a-b)[currentCommand[2]-1])
    }
    
    return result
}