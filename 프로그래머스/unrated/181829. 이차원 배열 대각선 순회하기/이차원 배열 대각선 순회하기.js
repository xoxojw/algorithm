const solution = (board, k) => {
    let answer = 0;
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[i].length; j++) {
            i+j <= k ? answer += board[i][j] : answer += 0
        }
    }
    return answer;
}