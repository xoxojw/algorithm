const solution = (arr) => {
    const len = arr.length;
    let answerLen = 1;
    while (answerLen < len) { answerLen *= 2 }
    for (let i=len; i<answerLen; i++) {
        arr.push(0)
    }
    return arr;
}