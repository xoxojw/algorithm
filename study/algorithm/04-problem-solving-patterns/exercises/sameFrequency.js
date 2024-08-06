// 연습문제) 빈도수 세기 - sameFrequency
// sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.

// 여러분의 솔루션은 반드시 다음과 같은 복잡성을 가져야 합니다.:
// Time: O(N)

// 배열 - 객체(object), 참조형(reference) 타입
// 문자열 - 문자(string), 원시형(primitive) 타입
const mySolution = (num1, num2) => {
	const arr1 = [...num1.toString()]; // 왜 굳이 배열로? 그냥 문자열로만 해도 됨
	const arr2 = [...num2.toString()];

	if (arr1.length !== arr2.length) {
		return false;
	}

	const lookup = {};
	for (let i = 0; i < arr1.length; i++) {
		let number = arr1[i];
		lookup[number] ? (lookup[number] += 1) : (lookup[number] = 1);
	}
	for (let i = 0; i < arr2.length; i++) {
		let number = arr2[i];
		if (!lookup[number]) {
			return false;
		} else {
			lookup[number] -= 1;
		}
	}

	return true;
};

function sameFrequency(num1, num2) {
	let strNum1 = num1.toString(); // 문자열
	let strNum2 = num2.toString();
	if (strNum1.length !== strNum2.length) return false;

	let countNum1 = {};
	let countNum2 = {};

	for (let i = 0; i < strNum1.length; i++) {
		countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
	}

	for (let j = 0; j < strNum1.length; j++) {
		countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
	}

	for (let key in countNum1) {
		if (countNum1[key] !== countNum2[key]) return false;
	}

	return true;
}

// 예시 인풋:
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
