function solution(number) {
    return ([...number].map(Number).reduce((acc, cur) => acc+cur))%9;
}