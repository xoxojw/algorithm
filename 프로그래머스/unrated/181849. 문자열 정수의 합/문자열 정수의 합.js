function solution(num_str) {
    return [...num_str].map(Number).reduce((a,b)=>a+b);
}