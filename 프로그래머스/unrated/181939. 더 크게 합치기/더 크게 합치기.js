function solution(a, b) {
    const A = a.toString();
    const B = b.toString();
    
    const ApB = +(A + B);
    const BpA = +(B + A); 
    
    return ApB < BpA ? BpA : ApB
}