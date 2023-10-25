function solution(num_list, n) {
    return num_list.filter((x)=>x===n).length === 0  ? 0 : 1
}