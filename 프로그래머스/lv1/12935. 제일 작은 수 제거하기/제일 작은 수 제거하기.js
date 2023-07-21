function solution(arr) {
    return arr.length === 1 ? [-1] : arr.filter(v => v !== Math.min(...arr))
}