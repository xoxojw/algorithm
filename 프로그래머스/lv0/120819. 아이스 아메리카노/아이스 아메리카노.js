function solution(money) {
    let result = [];
    let cupsOfCoffee = Math.floor(money/5500);
    let change = money - 5500*cupsOfCoffee;
    result.push(cupsOfCoffee, change);
    return result;
}