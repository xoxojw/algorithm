function solution(numbers, direction) {
    if (direction === "right") {
        numbers.unshift(numbers.pop())
    } else {
        // 이렇게 하면 깔끔..!
        numbers.push(numbers.shift())
    }
    return numbers;
}