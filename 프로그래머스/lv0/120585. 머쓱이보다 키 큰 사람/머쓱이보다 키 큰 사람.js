function solution(array, height) {
    array.push(height);
    array.sort((a,b)=>a-b);
    return array.filter(a=>a>height).length;
}