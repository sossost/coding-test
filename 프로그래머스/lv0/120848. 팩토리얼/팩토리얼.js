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