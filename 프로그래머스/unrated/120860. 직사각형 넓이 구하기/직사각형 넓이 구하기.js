function solution(dots) {
    const x = dots.map((_, i) => dots[i][0])
    const y = dots.map((_, i) => dots[i][1])
    return (Math.max(...x)-Math.min(...x))*(Math.max(...y)-Math.min(...y))
}