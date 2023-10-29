const solution = (s) => {
    let answer = [];
    const arr = [...s]
    arr.forEach((i) => {
        arr.indexOf(i) === arr.lastIndexOf(i) && answer.push(i)
    })
    return answer.sort().join("");
}