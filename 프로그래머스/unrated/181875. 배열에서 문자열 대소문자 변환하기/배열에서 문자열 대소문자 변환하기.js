function solution(strArr) {
    return strArr.map((x,i)=>{
        if(i%2===1){
            return x.toUpperCase();
        }else{
            return x.toLowerCase();
        }
    })
}