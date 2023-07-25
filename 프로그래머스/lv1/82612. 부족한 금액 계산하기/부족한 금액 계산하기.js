function solution(price, money, count) {
 

    return Math.min(0,money-price*(count)*(count+1)/2)*(-1)
}