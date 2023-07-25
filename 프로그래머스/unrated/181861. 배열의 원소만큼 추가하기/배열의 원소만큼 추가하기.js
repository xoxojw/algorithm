const solution = (arr) => {
    let answer = [];
    for (let i=0; i<=arr.length; i++) {
        for (let j=1; j<=arr[i]; j++) {
            answer.push(arr[i])
        }
    }
    return answer
}