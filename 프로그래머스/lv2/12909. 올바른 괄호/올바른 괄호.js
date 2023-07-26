function solution(s){
    let result = [];
    [...s].forEach((x)=> x==="("? result.push('(') : result.pop('('));

    return (s.length%2 === 0 && result.length === 0)
}