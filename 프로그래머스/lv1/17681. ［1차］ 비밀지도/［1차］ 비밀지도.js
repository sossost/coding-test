function solution(n, arr1, arr2) {
    function 이진수배열변환(n,arr){
       return arr.map((x)=>{
          let 이진수변환 = x.toString(2);
          return '0'.repeat(n-이진수변환.length)+이진수변환
        })
    }
    
    const 이진수배열1 = 이진수배열변환(n,arr1)
    const 이진수배열2 = 이진수배열변환(n,arr2)
    
    
    let result = [];
    
    이진수배열1.forEach((x,i1)=>{
        let string = '';
        
        [...x].forEach((y,i2)=>{
        string += (이진수배열1[i1][i2] + 이진수배열2[i1][i2] >= 1) ? '#' : " ";   
        });
       
                       
        result.push(string);
        })
    
    return result
}