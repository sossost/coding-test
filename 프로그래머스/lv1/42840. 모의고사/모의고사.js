function solution(answers) {

    
    let num1Arr = [1,2,3,4,5]
    let num2Arr = [2,1,2,3,2,4,2,5]
    let num3Arr = [3,3,1,1,2,2,4,4,5,5]
    
    let num1 = {number:1,arr:[1,2,3,4,5],score:0}
    let num2 = {number:2,arr:[2,1,2,3,2,4,2,5],score:0}
    let num3 = {number:3,arr:[3,3,1,1,2,2,4,4,5,5],score:0}
    
    answers.forEach((x,i)=>{
        if(num1.arr[i%5] === x){
            num1.score ++
        }
        if(num2.arr[i%8] === x){
            num2.score ++
        }
        if(num3.arr[i%10] === x){
            num3.score ++
        }
    })
     const newArr = [num1,num2,num3].sort((a,b)=>b.score-a.score)
     return newArr.filter((x)=>x.score >= newArr[0].score).map((x)=>x.number)
    
}