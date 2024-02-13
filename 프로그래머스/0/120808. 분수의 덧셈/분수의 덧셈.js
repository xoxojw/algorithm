function solution(numer1, denom1, numer2, denom2) {
    let [numer, denom] = [(numer1 * denom2) + (numer2 * denom1), denom1 * denom2];
    
    const getGCD = (a, b) => {
        if (b === 0) return a;
        return getGCD(b, a % b);
    };
    const gcd = getGCD(numer, denom);
    
    return [numer/gcd, denom/gcd];
}