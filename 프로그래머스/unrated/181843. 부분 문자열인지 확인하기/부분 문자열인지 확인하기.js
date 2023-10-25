function solution(my_string, target) {
  for(let i = 0 ; i < my_string.length ; i++){
      if(my_string.slice(i, i+target.length) === target){
          return 1
      }
  }
    return 0;
}