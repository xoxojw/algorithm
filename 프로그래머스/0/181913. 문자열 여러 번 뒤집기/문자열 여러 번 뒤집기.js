const solution = (my_string, queries) => {
    const arr = [...my_string]
    for (const query of queries) {
        const [start, end] = [query[0], query[1]]
        const reversePart = arr.splice(start, end-start+1).reverse()
        arr.splice(start, 0, ...reversePart)
    }
    return arr.join("");
}