function solution(num_list) {
    function isOdd(num){
        if(num%2 === 1) return true;
        return false;
    }
    
    let odd = '';
    let even = '';
    
    num_list.forEach((x)=>{
        if(isOdd(x)) {
            odd += x
        }else{
            even += x
        }
    })
    
    return +odd + +even
}