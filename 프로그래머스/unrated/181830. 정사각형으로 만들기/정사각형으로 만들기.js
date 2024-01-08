function solution(arr) {
    const row = arr.length
    const column = arr[0].length
    
    if (row > column) {
        // 행과 열의 수 차이만큼 각 행에 0을 추가
        for (let i=0; i<row; i++) {
            arr[i].push(...Array(row-column).fill(0));
        }
        return arr;
        
    } else if (column > row) {
        let addArr = [];
        // 열과 행의 수 차이만큼 추가 할 배열을 addArr로 만들어주고 이를 스프레드 연산자로 분리하여 arr에 추가
        for (let j=0; j<column-row; j++) {
            addArr.push(Array(column).fill(0))
        }
        arr.push(...addArr);
        return arr;
        
    } else return arr;
}