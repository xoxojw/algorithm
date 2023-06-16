function solution(my_string, n) {
    return [...my_string].map(e => e.repeat(n)).join("");
}