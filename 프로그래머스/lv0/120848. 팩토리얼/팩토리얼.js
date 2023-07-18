function solution(n) {
    function fac(num){
        let result = 1;
        for(let i =1; i <=num;i++){
            result *= i
        }
        return result
    }
    

  
    for(let i = 1 ; i <=10 ;i++){
        if(fac(i) > n){
        return (i-1)
        } else if(i===10){
            return 10
        }
    }
}

/* 재귀함수 사용하는 방법이 있음 
function factorial(n) {
  return (n===1 ? 1 : n*(factorial(n-1)))
}
*/
