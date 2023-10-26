function solution(my_string, is_suffix) {
    const rms = my_string.split('').reverse().join('')
    const ris = is_suffix.split('').reverse().join('')
    
    if(rms.slice(0,ris.length) === ris) return 1
    
    return 0
}