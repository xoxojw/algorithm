function solution(my_string, is_suffix) {
    return my_string.includes(is_suffix, my_string.length - is_suffix.length) ? 1 : 0;
}