// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// 시간 복잡도 - O(N^2)
const naiveSolution = (arr, num) => {
	if (arr.length < num) return null;

	let maxSum = -Infinity; // arr 배열의 요소가 모두 음수인 경우를 고려하여 0이 아닌 -Infinity로 설정
	for (let i = 0; i < arr.length - num + 1; i++) {
		let tempSum = 0;
		for (let j = 0; j < num; j++) {
			tempSum += arr[i + j];
		}
		if (tempSum > maxSum) {
			maxSum = tempSum;
		}
		// console.log(tempSum, maxSum);
	}

	return maxSum;
};

// 슬라이딩 윈도우 알고리즘을 사용한 솔루션
// 시간 복잡도 - O(N)
const maxSubarraySum = (arr, num) => {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < num) return null;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i]; // 배열값 중 하나를 빼고 다른 하나를 더하는 과정이 슬라이딩 윈도우의 과정
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
