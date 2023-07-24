function solution(s) {
    const length = s.length
    const centerIndex = ~~(s.length/2)
    return [...s].filter((x,i)=>length%2 ? i === centerIndex : i === centerIndex-1|| i=== centerIndex).join('')
}