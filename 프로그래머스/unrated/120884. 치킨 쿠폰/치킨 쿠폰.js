function solution(chicken) {
    let answer = 0;
    while (chicken >= 10) {
        answer += Math.floor(chicken/10);
        chicken = chicken%10 + Math.floor(chicken/10);
    }
    return answer;
}