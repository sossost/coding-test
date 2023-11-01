function solution(s) {
    const a = s.replaceAll("{{",'')
    const b = a.replaceAll("}}",'')
    const c = b.split('},{')
    const d = c.map((x)=>x.split(','))
    const f = d.sort((a,b)=>a.length-b.length)
    
    let result = [];
    
    console.log(f)
    
    for(let i = 0 ; i < f.length ; i++){
        if(i === 0){
            result.push(+f[0])
        } else {
        const nX = f[i].reduce((a,c)=>+a + +c,0)-f[i-1].reduce((a,c)=>+a + +c,0)
        result.push(nX)
        }
    }
              
    return result
}