function solution(numbers) {
    const newNum = numbers.sort((a, b) => a - b)
    return newNum[0]*newNum[1] > newNum[newNum.length - 1]*newNum[newNum.length - 2] ? newNum[0]*newNum[1] : newNum[newNum.length - 1]*newNum[newNum.length - 2]
}