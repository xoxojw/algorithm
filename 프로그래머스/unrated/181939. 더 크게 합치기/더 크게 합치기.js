function solution(a, b) {
    return Number(String(a)+b) > Number(String(b)+a) ? Number(String(a)+b) : Number(String(b)+a);
}