// 이진 검색 의사코드 - binarySearch 함수는 정렬된 배열과 값을 인자로 받는다. 배열의 시작 부분에 왼쪽 포인터를, 배열의 끝 부분에 오른쪽 포인터를 생성한다.
// 왼쪽 포인터가 오른쪽 포인터보다 앞에 있는 동안: 중간에 포인터를 하나 생성한다. 찾고자 하는 값을 발견하면, 그 인덱스를 반환
// 만약 값이 너무 작다면, 왼쪽 포인터를 위로 이동
// 만약 값이 너무 크다면, 오른쪽 포인터를 아래로 이동
// 값을 찾지 못하면, -1을 반환

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    let currentElement = arr[middle];

    if (currentElement < val) {
      left = middle + 1;
    } else if (currentElement > val) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], 11)); // -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)) // 2
