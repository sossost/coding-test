function solution(n) {
  for(let i = n+1 ; i<2*n ; i++){
      if(i.toString(2).match(/1/g).length === n.toString(2).match(/1/g).length){
          return i
      }
  }
}