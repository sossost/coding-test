function solution(s) {
    const 변환 = {
        zero : 0,
        one : 1,
        two : 2,
        three : 3,
        four : 4,
        five : 5,
        six : 6,
        seven : 7,
        eight : 8,
        nine : 9,
        
    }
   
    return +s.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g,function(matched){
        return 변환[matched]
    });
}