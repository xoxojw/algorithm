// 📌 객체의 삽입, 제거, 검색, 접근
// 1. 삽입 - O(1)
let obj = { a: 1 };
obj['b'] = 2; // 새로운 키 'b' 추가

// 2. 제거 - O(1)
let obj = { a: 1 };
obj['b'] = 2; // 새로운 키 'b' 추가

// 3. 검색 - O(N)
let valueExists = Object.values(obj).includes(2); // 값 2가 존재하는지 확인

// 4. 접근 - O(1)
let aValue = obj['a']; // 키 'a'의 값을 얻음

// 이러한 성능 특성은 JavaScript 객체가 내부적으로 해시 테이블 같은 구조를 사용하여 키와 값을 저장하기 때문이다. 해시 테이블은 매우 효율적인 데이터 접근과 조작을 가능하게 함



// 📌 객체 내장 메서드
let instructor = {
	firstName: "Kelly",
	isInstructor: true,
	favoriteNumbers: [1, 2, 3, 4],
};

Object.keys(instructor); // ['firstName', 'isInstructor', 'favoriteNumbers'] - key들의 배열 형태
// O(N) - key가 많아질수록 이 배열에 추가해야하는 시간이 늘어남

Object.values(instructor); // ['Kelly', true, Array(4)]
// O(N)

Object.entries(instructor); // [Array(2), Array(2), Array(2)]
// O(N)

instructor.hasOwnProperty("firstName");
// O(1) - 배열을 순회할 필요없이 JavaScript 엔진은 해시 함수를 사용하여 해당 키의 위치를 빠르게 찾아내므로 상수 시간 복잡도를 갖는다.