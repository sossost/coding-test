function solution(a, b) {
    const sapsb = +(a.toString()+b.toString())
    const dab = 2*a*b 
    
    return dab > sapsb ? dab : sapsb
}