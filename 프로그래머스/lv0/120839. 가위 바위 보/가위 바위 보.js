function solution(rsp) {
    return [...rsp].map((e) => e === "2" ? "0" : e === "0" ? "5" : "2").join("");
}