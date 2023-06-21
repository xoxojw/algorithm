function solution(num_list) {
    return Math.max(num_list.filter((v, i) => i%2 === 0).reduce((a, b)=>a+b), num_list.filter((v, i) => i%2 === 1).reduce((a, b)=>a+b));
}