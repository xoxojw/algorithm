function solution(my_strings, parts) {
    const arr = [];
    for (let i=0; i<my_strings.length; i++) {
        arr.push(my_strings[i].slice(parts[i][0], parts[i][1]+1))
    }
    return arr.join('');
}