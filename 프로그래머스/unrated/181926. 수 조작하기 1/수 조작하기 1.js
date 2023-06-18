function solution(n, control) {
    return n + [...control].map(e => e === "w" ? 1 : e === "s" ? -1 : e === "d" ? 10 : -10).reduce((a,b)=> a+b);
}