function solution(numbers) {
    const regex = new RegExp(`[${numbers.join('')}]`,'g')
    return "123456789".replace(regex,'').split('').reduce((acc,cur)=>acc+ +cur,0)
}