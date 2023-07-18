const solution = (i, j, k) => {
    const arr = [];
    for (i; i<=j; i++) {
        arr.push(i)
    }
    return [...arr.join('')].filter(v => parseInt(v) === k).length;
}