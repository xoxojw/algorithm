const solution = (array, n) => {
    const abs = [...array].map(v => Math.abs(v - n));
    const firstIdx = abs.indexOf(Math.min(...abs));
    const lastIdx = abs.lastIndexOf(Math.min(...abs))
    return firstIdx === lastIdx ? array[firstIdx] : array[lastIdx] > array[firstIdx] ? array[firstIdx] : array[lastIdx];
}