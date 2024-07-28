// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// 중첩된 루프 사용
// 📌 O(n)*2O(n) -> O(n^2)의 시간 복잡도
const mySolution = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;

	// for loop - O(n)
	for (let i = 0; i < arr1.length; i++) {
		if (arr2.includes(arr1[i] ^ 2)) return true; // includes - O(n)
		arr2.splice(i, 1); // splice - O(n)
	}

	return false;
};

// 📌 이 방법도 똑같이 중첩된 루프를 사용하여 O(n^2)의 시간 복잡도를 가짐
function naiveSolution(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		if (correctIndex === -1) {
			return false;
		}
		// console.log("arr2 ", arr2);
		arr2.splice(correctIndex, 1);
	}
	return true;
}

// console.log(naiveSolution([1, 2, 3], [4, 1, 9])); // true
// console.log(naiveSolution([1, 2, 3], [1, 9])); // false
// console.log(naiveSolution([1, 2, 1], [4, 4, 1])); // false (must be same frequency)

// 빈도수 세기 패턴을 사용한 솔루션
// 📌 시간 복잡도 - O(n)으로 더 효율적
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	// 두 객체를 사용하여 각 배열의 개별값 빈도를 카운트
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	// ✅ 각 루프는 독립적으로 n번 실행되기 때문에 선형적으로 증가
	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}
	console.log(frequencyCounter1);
	console.log(frequencyCounter2);
	for (let key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])); // false
