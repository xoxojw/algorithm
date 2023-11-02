function solution(n) {
    let answer = n+1;
    const reg = new RegExp("1", "g");
    for (let i=1; n.toString(2).match(reg).length !== answer.toString(2).match(reg).length; i++) {
        ++answer;
    }
    return answer;
}