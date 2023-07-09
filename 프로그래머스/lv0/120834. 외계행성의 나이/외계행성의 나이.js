function solution(age) {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    return [...age+""].map((v) => arr[v]).join("");
}