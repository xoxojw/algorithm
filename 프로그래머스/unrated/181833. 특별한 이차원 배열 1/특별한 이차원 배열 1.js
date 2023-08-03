const solution = (n) => {
    const arr = Array(n).fill(Array(n).fill(0))
    return arr.map((a, ai) => a.map((b, bi) => ai === bi ? 1 : b))
}