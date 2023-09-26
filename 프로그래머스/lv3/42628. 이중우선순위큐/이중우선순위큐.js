function solution(operations) {
    let queue = []
    
    operations.forEach((item)=>{
        const seperatedItem = item.split(' ')
        if(seperatedItem[0] === "I"){
            queue.push(+seperatedItem[1])
        }
        if(seperatedItem[0] === "D"){
            if(!queue.length){
                return
            }
            if(seperatedItem[1] === "1"){
             queue = [...queue.filter((item)=> item !== Math.max(...queue))] 
            }
            if(seperatedItem[1] === "-1"){
             queue = [...queue.filter((item)=> item !== Math.min(...queue))]
            }
        }
        console.log(queue)
    })
    return queue.length ? [Math.max(...queue),Math.min(...queue)] : [0,0] ;
}