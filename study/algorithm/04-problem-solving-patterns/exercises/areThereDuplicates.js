// 연습문제) 빈도수 세기 / 다중 포인터 - areThereDuplicates
// 가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다.빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.

// 제약 조건:
// Time - O(n)
// Space - O(n)

// 보너스:
// Time - O(n log n)
// Space - O(1)

// 빈도수 세기 패턴
// 시간 복잡도 O(n), 공간 복잡도 O(n)
const mySolution1 = (...inputs) => {
	if (inputs.length === 0) return false;

	const lookup = {};
	for (let i = 0; i < inputs.length; i++) {
		let val = inputs[i];
		if (!lookup[val]) {
			lookup[val] = 1;
		} else {
			return true;
		}
	}
	return false;
};

function areThereDuplicates1() {
	let collection = {};
	for (let val in arguments) {
		collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
	}
	for (let key in collection) {
		if (collection[key] > 1) return true;
	}
	return false;
}

// ---------------------------------------------------------------------

// 다중 포인터 패턴
// inputs의 요소들이 숫자인지, 문자인지에 따라서 정렬 방법이 다름
// 숫자 - sort((a, b) => a - b), 문자 sort()
const mySolution2 = (...inputs) => {
	if (inputs.length === 0) return false;

	const areNumbers = inputs.every((input) => typeof input === "number");
	areNumbers ? inputs.sort((a, b) => a - b) : inputs.sort();

	let i = 0;
	for (let j = 1; j < inputs.length; j++) {
		if (inputs[i] !== inputs[j]) {
			i++;
		} else {
			return true;
		}
	}
	return false;
};

function areThereDuplicates2(...args) {
	// Two pointers
	args.sort((a, b) => a > b); // args들이 숫자, 문자인 경우 모두 가능
	let start = 0;
	let next = 1;
	while (next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}
		start++;
		next++;
	}
	return false;
}

// one liner solution
function areThereDuplicates3() {
	return new Set(arguments).size !== arguments.length;
}

// 예시:
console.log(areThereDuplicates2(1, 2, 3)); // false
console.log(areThereDuplicates2(1, 2, 2)); // true
console.log(areThereDuplicates2("a", "b", "c", "a")); // true
