const solution = (n) => {
    return [...n.toString()].map(v => v === "0" ? 0 : Number(v)).reduce((acc, cur) => acc + cur)
}