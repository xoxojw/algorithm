const solution = (intStrs, k, s, l) => {
    return intStrs.map(a => parseInt(a.slice(s, s+l))).filter(b => b>k)
}