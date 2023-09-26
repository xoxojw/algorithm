const solution = (arr, flag) => {
    let answer = [];
    for (let i=0; i<arr.length; i++) {
        if (flag[i]) {
            answer.push(...Array(arr[i]*2).fill(arr[i]))
        } else answer.splice(-arr[i])
    }
    return answer;
}