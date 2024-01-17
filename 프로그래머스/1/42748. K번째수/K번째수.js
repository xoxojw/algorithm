function solution(array, commands) {
    let answer = [];
    for (const element of commands) {
        const slicedAndSortedArray = array.slice(element[0]-1, element[1]).sort((a, b) => a-b)
        answer.push(slicedAndSortedArray[element[2]-1])
    }
    return answer;
}