function solution(keyinput, board) {
    let answer = [0, 0];
    let range = [Math.floor(board[0]/2), Math.floor(board[1]/2)]
    for (let i=0; i<keyinput.length; i++) {
        switch (keyinput[i]) {
            case "left":
                -answer[0] < range[0] && --answer[0]
                break;
            case "right":
                answer[0] < range[0] && ++answer[0]
                break;
            case "up":
                answer[1] < range[1] && ++answer[1]
                break;
            case "down":
                -answer[1] < range[1] && --answer[1]
                break;
        }
    }
    return answer;
}