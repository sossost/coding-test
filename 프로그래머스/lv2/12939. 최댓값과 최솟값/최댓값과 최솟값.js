function solution(s) {
    const arr = s.split(' ')
    return arr.sort((a,b)=>a-b).filter((_,i)=> i===0 || i===arr.length-1 ).join(' ');
}

// Math.min() / Math.max() 메소드 활용하기 배열에서 최솟값,최댓값을 리턴함
