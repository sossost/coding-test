function solution(s) {
    let arr = []
    return s.split('').map((x,i)=>{
      let index = arr.indexOf(x)
      arr.unshift(x)
        return index === -1 ? -1 : index+1
      
    })
    
}