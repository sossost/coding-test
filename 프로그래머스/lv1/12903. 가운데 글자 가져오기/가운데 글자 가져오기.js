function solution(s) {
    const length = s.length
    const centerIndex = ~~(s.length/2)
    return [...s].filter((x,i)=>length%2 ? i === centerIndex : i === centerIndex-1|| i=== centerIndex).join('')
}

// string.subString 이라는 문자열 자르는 메소드가 있음
