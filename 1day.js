
// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
function solution(n) {
    return Array.from({length:n},(v,i)=>i+1).filter((num)=>{
        let divisor = []
        for(let i = 1 ; i <= num ; i++){
            if(num%i ===0){
                divisor.push(i);
            }
        }
        return divisor.length>=3 
    }).length;
}


// 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
    let result = []
    my_string.split('').forEach((x)=>result.includes(x) || result.push(x))
    return result.join('')
}
// Set()라는 원시값(string, number, bigint, bollean, undefined, symbol, null)과 객체 참조, 모든유형의 유일한 값을 저장할 수 있는 메소드가 있음


/* 머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다. 그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다. 문자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
모스부호는 다음과 같습니다. */
function solution(letter) {
    morse = 
    { 
      '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
      '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
      '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
      '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
      '-.--':'y','--..':'z'
    }
    
  return  letter.split(' ').map((x)=> morse[x]).join('')
}

/* 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.
*/
function solution(num_list, n) {
    let resultArrLength = num_list.length/n
    let result = Array.from({length:resultArrLength}).map((x)=>[])
    num_list.forEach((num,index)=>result[~~(index/n)].push(num))
    return result
}
