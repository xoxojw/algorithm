function solution(arr) {
    const min = Math.min(...arr);
    return arr.length !== 1 ? arr.filter(i => i !== min) : [-1]
    // return arr.length === 1 ? [-1] : arr.filter(v => v !== Math.min(...arr))
}