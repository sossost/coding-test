function solution(num_list) {
    return num_list.length >= 11 ? num_list.reduce((v,i)=>v+=i) : num_list.reduce((v,i)=>v*i)
}