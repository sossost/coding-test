function solution(clothes) {
   const keyArr = clothes.map((x,index)=> x[1]);
    
   const amountCheckObj = {}
   keyArr.forEach((x)=>{
       amountCheckObj[x] = (amountCheckObj[x]||0)+1
   });
    
    const amountArr = Object.values(amountCheckObj)
    
   return amountArr.reduce((a,c)=>a*(c+1),1) -1
}