// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// 시간 복잡도 - O(N)
const mySolution = (arr, val) => {
	return arr.includes(val) ? arr.indexOf(val) : -1;
};

// 시간 복잡도 - O(N)
const naiveSolution = (arr, val) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
};

// 분할 정복 - 이진 탐색 트리
// 시간 복잡도는 O(log n)으로, 위의 두 솔루션 O(N)보다 효율적임
// ✅ 이진 탐색은 배열이 정렬되어 있을 때 매우 효율적이며, 선형 탐색(O(N))에 비해 훨씬 빠름
const search = (arr, val) => {
	let min = 0;
	let max = arr.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		let currentElement = arr[middle];

		if (currentElement < val) {
			min = middle + 1;
		} else if (currentElement > val) {
			max = middle - 1;
		} else {
			return middle;
		}
	}

	return -1;
};

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
