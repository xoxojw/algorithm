function solution(str_list, ex) {
    return str_list.map(e => e.includes(ex) ? "" : e).join("");
}