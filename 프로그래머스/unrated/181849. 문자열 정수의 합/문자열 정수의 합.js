function solution(num_str) {

    return [...num_str].reduce((v,i)=>v+(+i),0);
}