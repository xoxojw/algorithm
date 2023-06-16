function solution(arr, k) {
    return arr.map(e => k%2 === 0 ? e+k : e*k);
}