// reduce와 fill()를 사용한 풀이
const solution = (arr) => arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);