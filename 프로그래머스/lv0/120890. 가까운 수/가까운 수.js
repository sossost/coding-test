function solution(array, n) {
    return array.sort().map((x,i)=> (x-n)).sort((a,b)=>Math.abs(a)-Math.abs(b))[0]+n
   
  
}