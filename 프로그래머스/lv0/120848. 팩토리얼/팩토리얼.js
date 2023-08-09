function solution(n) {
    let answer = 0;
    let factorial = 1;
    for (let i=2; factorial <= n; i++) {
        factorial *= i
        answer++
    }
    return answer;
}