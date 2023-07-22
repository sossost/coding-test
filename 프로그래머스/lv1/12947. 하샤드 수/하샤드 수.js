function solution(x) {
    
    return x%[...x.toString()].reduce((v,i)=>v+(+i),v=0) ? false:true;
}