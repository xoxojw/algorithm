const solution = (numbers) => {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    arr.forEach((str, idx) => {
        numbers = numbers.replaceAll(str, idx);
    })
    return +numbers;
}