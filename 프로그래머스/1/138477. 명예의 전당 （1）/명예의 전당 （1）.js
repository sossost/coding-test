function solution(k, score) {
  
    let scoreArr = [];
    let result = [];

    for(let i = 0 ; i < score.length ; i++){
       scoreArr.push(score[i]) 
       scoreArr = scoreArr.sort((a,b)=>b-a)
       
       if(scoreArr.length > k){
           scoreArr = scoreArr.slice(0,k)
       }

       result.push(scoreArr[scoreArr.length-1]) 
    }
    return result;
}