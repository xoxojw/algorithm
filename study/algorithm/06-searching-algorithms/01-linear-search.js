// 선형 검색 의사코드
// linearSearch 함수는 배열과 값을 인자로 받는다. 배열을 순회하며 현재 배열 요소가 그 값과 같은지 확인한다. 만약 같다면, 그 요소가 위치한 인덱스를 반환한다. 만약 값이 발견되지 않으면, -1을 반환한다.
// indexOf 메서드를 사용하지 않고 구현한다.

const mySolution = (array, target) => {
	// indexOf 사용X
	let i = 0;
	for (let el of array) {
		if (el === target) {
			return i;
		}
		i++;
	}
	return -1;
};

const linearSearch = (arr, val) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) return i;
	}
	return -1;
};
// 자바스크립트 내장 메서드인 indexOf로 위와 같은 방식으로 동작한다.

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
console.log(linearSearch([100], 200)); // -1

const states = [
	"Alabama",
	"Alaska",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"Florida",
	"Georgia",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Maryland",
	"Massachusetts",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Montana",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"New York",
	"North Carolina",
	"North Dakota",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Pennsylvania",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming",
];

console.log(linearSearch(states, "Texas")); // 42
