function solution(order) {
    return [...String(order)].filter(v => v === "3" || v === "6" || v === "9").length;
}