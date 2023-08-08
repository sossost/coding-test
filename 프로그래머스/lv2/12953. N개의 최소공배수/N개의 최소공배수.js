function solution(arr) {
    let ln = arr.sort((a,b)=>b-a)[0]
    let lcm = ln
    for(let i = 1; i < 1000000; i++){
        if( arr.filter((x)=>lcm*i%x !== 0).length === 0){
            return lcm*i
        }
    }
}