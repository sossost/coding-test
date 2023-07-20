function solution(s){
    const arr = [...s.toLowerCase().replace(/[^p^y]/g,'')]

    return arr.filter(x=>x==='y').length/2 - arr.filter(x=>x==='p').length/2 === 0 ? true : false
}