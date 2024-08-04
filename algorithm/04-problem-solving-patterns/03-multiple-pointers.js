// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
// 인수가 '정렬된 정수 배열'임에 유의

// 시간 복잡도 O(N^2), 공간 복잡도 O(1)
// 중첩된 반복문으로 효율성이 떨어짐
function naiveSolution(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]];
			}
		}
	}
}
// console.log(naiveSolution([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
// console.log(naiveSolution([-2, 0, 1, 3])); // undefined
// console.log(naiveSolution([1, 2, 3])); // undefined
// console.log(naiveSolution([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]

// 다중 포인터 패턴을 사용한 솔루션
// 시간 복잡도 O(N), 공간 복잡도 O(1)
function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
} // arr가 작은 수부터 큰 수까지 정렬된 정수 배열이므로 가장 작은 0번째 요소 + 가장 큰 마지막 요소에 포인터를 두고 비교해가면서 합이 양수인지 음수인지에 따라 포인터를 이동하는 것

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
// console.log(sumZero([-2, 0, 1, 3])); // undefined
// console.log(sumZero([1, 2, 3])); // undefined
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]

// -------------------------------------------------------------------------------------------
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
	if (arr.length === 0) return 0;

	let i = 0;
	for (let j = i + 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
		// console.log(i, j);
	}
	return i + 1;
} // 이 솔루션 역시 인수로 주어진 배열이 정렬되어 있을 때만 적용됨에 유의

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
