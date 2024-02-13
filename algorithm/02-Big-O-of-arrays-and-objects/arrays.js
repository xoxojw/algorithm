let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];

// 📌 배열의 삽입, 제거, 검색, 접근
// 1. 삽입과 제거 - 상황에 따라 다름
// push, pop - O(1)
names.push("Raj"); // 배열 마지막에 요소 추가
names.pop(); // 배열 마지막 요소 제거

// unshift, shift - O(N)
names.unshift("Raj"); // 배열 맨 처음에 요소 추가
names.shift(); // 배열 맨 첫 번째 요소 제거

// 따라서 비어있지 않은 배열에서는 상수 시간 복잡도를 갖는 push, pop이
// 선형 시간 복잡도를 갖는 shift, unshift보다 빠르다.

// 2. 검색 - O(N)
// 검색은 검색

// 3. 접근 - O(1)
// 접근은 인덱스로 접근하기 때문에 요소가 어디에 위치하든 빠르다.



// 📌 배열 메서드
// 이걸 다 외워야 할 필요는 없다..! 😵

// push - O(1)
// pop - O(1)
// push와 pop은 인덱스를 사용해서 접근하는 것과 똑같음

// shift - O(N)
// unshift - O(N)

// concat - O(N) // 여러 배열을 합쳐줌
let array1 = ['a', 'b', 'c']
let array2 = ['d', 'e', 'f']
array1.concat(array2); // ['a', 'b', 'c', 'd', 'e', 'f']

// slice - O(N) // 배열의 일부분을 새로운 배열로 복사해서 반환
// 10개 복사, 1000개 복사를 비교하면 걸리는 시간은 복사하는 엘리먼트 개수만큼 늘어나는 선형 시간 복잡도

// splice - O(N)
// 배열 시작에 추가할 수도 있고 배열 끝에 추가할 수도 있고 엘리멘트를 교체할 수도 있음

// sort - O(N * log N)

// forEach/map/filter/reduce/etc. - O(N) // 엘리먼트마다 한 가지 작업을 실행하기 때문에 배열이 커질수록 시간 복잡도도 증가하는 선형 시간 복잡도