function solution(cards1, cards2, goal) {
   let cardsOne = [...cards1]
   let cardsTwo = [...cards2]
    
   for(let i = 0 ; i < goal.length ; i++){
       if(goal[i]===cardsOne[0]){
           cardsOne.shift()
       } else if (goal[i]===cardsTwo[0]){
           cardsTwo.shift()
       } else {
           return "No"
       }
   }
    
   return "Yes"
}