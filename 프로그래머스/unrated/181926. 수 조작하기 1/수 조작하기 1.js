function solution(n, control) {
    let result = n;
    
    const controler = {
        w : 1,
        s : -1,
        d : 10,
        a : -10,
    }
    
    control.split('').forEach((x)=>result += controler[x])
    
    return result;
}