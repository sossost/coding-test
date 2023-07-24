function solution(left, right) {
    const arr = Array.from({length:right-left+1},(v,i)=> +i+left)
    const divisorNumber = (n) => {
        let divisor = [];
        for(let i = 1 ; i<=n ;i++){
           if( n%i === 0) divisor.push(i)
        }
        return divisor.length
    }
    return arr.reduce((acc,cur)=> acc + (divisorNumber(cur)%2 ? -cur : +cur),0)
}