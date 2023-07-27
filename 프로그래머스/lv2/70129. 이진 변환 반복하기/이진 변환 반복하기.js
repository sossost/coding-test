function solution(s) {
    
    let count = 0;
    let zeroNumber = 0;
    
   function 이진변환(s){
       if(s === "1") return;
       
      count += 1
      const newSLength = s.replace(/[0]/g,'').length;       
      zeroNumber += s.replace(/[1]/g,'').length;
      
      return 이진변환(newSLength.toString(2))
   }
    
    이진변환(s);
    
    return [count,zeroNumber];
}