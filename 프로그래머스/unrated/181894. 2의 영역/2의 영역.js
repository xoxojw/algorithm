const solution = (arr) => {
    const startIdx = arr.indexOf(2)
    const endIdx = arr.lastIndexOf(2)
    
    return arr.includes(2) ? arr.slice(startIdx, endIdx+1) : [-1]
}