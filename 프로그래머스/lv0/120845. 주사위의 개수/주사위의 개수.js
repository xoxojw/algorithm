function solution(box, n) {
    return box.map(v => Math.floor(v/n)).reduce((acc, cur) => acc*cur);
}