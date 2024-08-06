// 다중 포인터 - averagePair
// averagePair라는 함수를 작성합니다. 정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인합니다. 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있습니다.

// 보너스 제약조건: Time: O(N), Space: O(1)

const mySolution = (array, targetAvg) => {
	array.sort((a, b) => a > b); // 이미 정렬된 정수 배열이 주어지기 때문에 정렬할 필요 X

	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		let avg = (array[left] + array[right]) / 2;
		if (avg === targetAvg) return true;
		else if (avg > targetAvg) right--;
		else left++;
	}
	return false;
};

function averagePair(arr, num) {
	let start = 0;
	let end = arr.length - 1;
	while (start < end) {
		let avg = (arr[start] + arr[end]) / 2;
		if (avg === num) return true;
		else if (avg < num) start++;
		else end--;
	}
	return false;
}

// 예시 인풋:
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
