function solution(n) {
    return [...String(n)].map(Number).reduce((a,b)=>a+b);
}