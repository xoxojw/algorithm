function solution(arr, divisor) {
    const answer = arr.filter((v) => v%divisor === 0).sort((a, b) => a-b)
    answer.length === 0 ? answer.push(-1) : answer;
    return answer;
}