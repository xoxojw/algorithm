function solution(my_string) {
  return [...my_string].filter((v) => Number(v) || v === '0').map((v) => Number(v)).sort((a,b) => a-b);
}