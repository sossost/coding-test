function solution(my_string, s, e) {
    const prefix = my_string.slice(0,s);
    const suffix = my_string.slice(e+1,my_string.length);
    const middle = my_string.slice(s,e+1);
    
    return prefix + middle.split('').reverse().join('') + suffix 
}