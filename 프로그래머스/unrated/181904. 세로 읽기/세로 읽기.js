const solution = (my_string, m, c) => {
    let string = [];
    for (let i=0; i<=Math.floor(my_string.length/m); i++) {
        string.push([...my_string][m*i + c - 1])
    }
    return string.join('')
}