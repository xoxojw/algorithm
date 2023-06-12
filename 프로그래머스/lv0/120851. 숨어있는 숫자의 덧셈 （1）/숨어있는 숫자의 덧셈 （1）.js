function solution(my_string) {
    return [...my_string].filter(Number).map(Number).reduce((a,b)=>a+b);
}