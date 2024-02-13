function solution(numer1, denom1, numer2, denom2) {
    let answer = [(numer1 * denom2) + (numer2 * denom1), denom1 * denom2];
    const getGCD = (a, b) => {
        if (b === 0) return a;
        return getGCD(b, a % b);
    }
    let gcd = getGCD(answer[0], answer[1])
    return [answer[0]/gcd, answer[1]/gcd];
}