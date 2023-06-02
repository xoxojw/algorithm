function solution(numbers) {
    numbers = numbers.sort((a, b) => a - b);
    return numbers[numbers.length - 1]*numbers[numbers.length - 2];
}