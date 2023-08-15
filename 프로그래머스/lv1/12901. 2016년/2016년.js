function solution(a, b) {
    let sum = 0
    let monthDayArr = [31,29,31,30,31,30,31,31,30,31,30,31]
    let dayArr = ["THU","FRI","SAT","SUN","MON","TUE","WED"]
    let i = 0
        while(i<=a-1){
            if(i===a-1){
                return (dayArr[(sum+b)%7])
            }
            sum += monthDayArr[i]
            i++
        }
    
}