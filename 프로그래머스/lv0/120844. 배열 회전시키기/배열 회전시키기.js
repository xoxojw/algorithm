function solution(numbers, direction) {
    if (direction === "right") {
        numbers.unshift(numbers.pop())
    } else {
        numbers.shift(numbers.push(numbers[0]))
    }
    return numbers;
}