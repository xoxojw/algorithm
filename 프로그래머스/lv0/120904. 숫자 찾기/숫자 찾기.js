function solution(num, k) {
    const numArr = [...String(num)];
    const strK = String(k);
    return numArr.includes(strK) ? numArr.indexOf(strK) + 1 : -1;
}