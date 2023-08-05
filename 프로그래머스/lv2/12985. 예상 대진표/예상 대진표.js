function solution(n,a,b){
    let aNumber = a;
    let bNumber = b;

   for(let i = 1 ; i<=n-1;i++){
     aNumber = Math.ceil(aNumber/2)
     bNumber = Math.ceil(bNumber/2)
     if(aNumber === bNumber){
         return i
     }
   }
}