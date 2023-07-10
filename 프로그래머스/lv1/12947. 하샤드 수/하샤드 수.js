function solution(x) {
    return x%[...x+''].reduce((acc, cur) => acc/1 + cur/1) === 0 ? true : false;
}