function solution(n) {
    const numbers = [];
    for (let i=1; i<=n; i++) {
        if (n%i === 0) {
            numbers.push(i)
        }
    }
    return numbers.length;
}