function solution(num_list) {
    return num_list.reduce((a, b) => a + b)**2 > num_list.reduce((a, b) => a * b) ? 1 : 0;
}