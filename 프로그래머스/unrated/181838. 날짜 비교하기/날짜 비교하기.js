function solution(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    return d2-d1 > 0 ? 1 : 0
}