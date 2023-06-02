function solution(num_list, n) {
    return num_list.filter((e) => e === n).length > 0 ? 1 : 0;
}