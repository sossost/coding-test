function solution(elements) {
    let arr = []
    for(let i = 1; i <= elements.length ; i++){
        for(let j = 0; j < elements.length ; j++ ){
           arr.push([...elements,...elements].slice(j,j+i).reduce((a,c)=>a+=c,0))
        }
    }
    return [...new Set(arr)].length
}