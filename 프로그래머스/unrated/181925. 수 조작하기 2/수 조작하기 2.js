const solution = (numLog) => {
    let answer = '';
    for (let i=0; i<numLog.length - 1; i++) {
        if (numLog[i+1] - numLog[i] === 1) answer += "w"
        else if (numLog[i+1] - numLog[i] === -1) answer += "s"
        else if (numLog[i+1] - numLog[i] === 10) answer += "d"
        else answer += "a"
    }
    return answer;
}

// // 다른 사람의 풀이
// // reduce와 switch 사용
// function solution(numLog) {
//     return numLog.reduce((acc, cur, curIdx, originArr) => {
//         if(!curIdx) return ""
//         const prev = originArr[curIdx-1]
//         switch(prev-cur) {
//             case -1:
//                 return acc+'w'
//             case 1:
//                 return acc+'s'
//             case -10:
//                 return acc+'d'
//             case 10:
//                 return acc+'a'
//         }
//     }, "")
// }