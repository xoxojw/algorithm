function solution(num_list) {
    let even_list = num_list.filter(a => a%2 === 0);
    let odd_list = num_list.filter(a => a%2 === 1);
    return solution = [even_list.length, odd_list.length];
}