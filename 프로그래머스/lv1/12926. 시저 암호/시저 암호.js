function solution(s, n) {
   const sAsciiArr = [...s].map((x)=>{
        const ascii = x.charCodeAt()
      if(65 <=  ascii&&ascii<=90 ){
          if(ascii+n >90){
              return ascii+n-26
          }
          return ascii+n
      }else if(97<=ascii&&ascii<=122){
          if(ascii+n>122){
              return ascii+n-26
          }
          return ascii+n
      }else{
          return ascii
      }
    
    })

    return sAsciiArr.map((x)=>String.fromCharCode(x)).join('')
}