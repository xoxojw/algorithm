function solution(sizes) {
    const sortSizes = sizes.map(v => v.sort((a, b) => a - b))
    const w = []
    const h = []
    for (const size of sortSizes) {
        w.push(size[0])
        h.push(size[1])
    }
    return Math.max(...w)*Math.max(...h)
}