// const solution = (k, score) => {
//     let hallOfFame = [];
//     let LowestScores = [];
    
//     for (let todayScore of score) {
//         hallOfFame.push(todayScore);
//         hallOfFame.sort((a, b) => b - a).splice(k);
//         LowestScores.push(hallOfFame[hallOfFame.length-1]);
//     }
    
//     return LowestScores;
// }

function solution(k, score) {
    const stack = []
    return score.reduce((a,c) => {
        if(stack.length < k) {
            stack.push(c)
            stack.sort((a,b) => a - b)
        }
        else {
            stack.push(c)
            stack.sort((a,b) => a - b)
            stack.shift()
        }
        a.push(stack[0])
        return a
    },[])
}

