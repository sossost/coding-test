function solution(name, yearning, photo) {
    const obj = {} 
    name.map((x,i)=>obj[x] = yearning[i])
    return photo.map((x)=>x.reduce((a,c)=>a+= (obj[c] ?? 0) ,0))
}