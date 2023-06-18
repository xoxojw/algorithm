function solution(num_list) {
    return num_list.map(e => e < 0).indexOf(true);
}