function solution(a, b) {
    let sum = [];
    for (let i=0; i<=a.length; i++) {
        sum.push(a[i]*b[i])
    }
    return sum.filter(Number).reduce((acc, cur) => acc+cur)
}