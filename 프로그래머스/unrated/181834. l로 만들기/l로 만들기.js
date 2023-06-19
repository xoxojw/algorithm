function solution(myString) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    return [...myString].map(v => alphabet.includes(v) ? 'l' : v).join("");
}