function solution(a, b, c) {
    const case1 = a+b+c;
    const case2 = a**2+b**2+c**2;
    const case3 = a**3+b**3+c**3;
    
    const sameCase = [...new Set([a,b,c])].length
    if(sameCase === 3){
        return case1
    }
    if(sameCase === 2){
        return case1*case2
    }
    if(sameCase === 1){
        return case1*case2*case3
    }
}