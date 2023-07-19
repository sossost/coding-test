function solution(n)
{
 
    return [...n.toString()].map((x)=>+x).reduce((v,i)=>v += i);
}