function solution(myString) {
    return [...myString].map(e => e === "a" || e === "A" ? e.toUpperCase() : e.toLowerCase()).join("");
}