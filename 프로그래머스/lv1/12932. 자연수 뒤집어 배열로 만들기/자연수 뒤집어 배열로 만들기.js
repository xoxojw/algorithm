const solution = (n) => {
    return [...n.toString()].reverse().map((v, i) => parseInt(v));
}