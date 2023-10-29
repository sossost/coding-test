function solution(number) {
    const sum = number.split('').reduce((a,c)=>+a + +c,0)
    return sum%9
}