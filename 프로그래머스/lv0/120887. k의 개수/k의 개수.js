function solution(i, j, k) {
    return [...Array(j-i+1)].fill().map((_,index)=>i+index).join('').split(k).length-1
}