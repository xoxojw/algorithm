const solution = (my_string) => {
    const answer = [];
    for (let i=0; i<my_string.length; i++) {
        answer.push([...my_string].splice(i, my_string.length).join(''))
    }
    return answer.sort();
}