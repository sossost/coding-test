function solution(s) {
    const arr = s.split(' ')
    return arr.sort((a,b)=>a-b).filter((_,i)=> i===0 || i===arr.length-1 ).join(' ');
}