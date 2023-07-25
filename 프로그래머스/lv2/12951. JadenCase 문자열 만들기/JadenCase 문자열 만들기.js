function solution(s) {
    return s.split(' ').map((x)=>[...x].map((y,i)=>i===0 ? y.toUpperCase() : y.toLowerCase()).join('')).join(" ");
}