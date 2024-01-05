function solution(n) {
    let answer = 0;
    
    // 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수는 주어진 수의 홀수인 약수 개수와 같다.
    // 따라서 주어진 자연수 n을 i로 나누었을 때 나머지가 0이면서 홀수인 i의 개수를 찾으면 된다.
    for (let i=1; i<=n; i++) {
        if (n%i === 0 && i%2 === 1) answer++
    }
    
    return answer;
}