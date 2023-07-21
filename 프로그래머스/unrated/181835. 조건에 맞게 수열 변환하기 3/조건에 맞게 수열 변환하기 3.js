function solution(arr, k) {

    return arr.map((x)=>k%2 ? k*x : k+x);
}