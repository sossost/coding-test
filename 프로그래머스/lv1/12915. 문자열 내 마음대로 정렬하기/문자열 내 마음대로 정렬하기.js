function solution(strings, n) {   
    
    function 정렬 (a,b,n){
        let 비교 = a.charCodeAt(n)-b.charCodeAt(n);
        if(n===strings.length) return 비교
        if( 비교 === 0){
            return 정렬(a,b,n+1)
        }
        return 비교
    }
    
    return strings.sort((a,b)=> a.charCodeAt(n)-b.charCodeAt(n)===0 ? 정렬(a,b,0) : a.charCodeAt(n)-b.charCodeAt(n));
}