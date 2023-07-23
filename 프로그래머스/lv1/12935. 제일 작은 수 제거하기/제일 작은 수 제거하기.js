function solution(arr) {
    const num = [...arr].sort((a,b)=>a-b).shift()
    const result = arr.filter(x=>x!==num)
    
    return result.length ===0 ? [-1] : result
}