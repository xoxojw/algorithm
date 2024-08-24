// outer 함수 - 외부에서 호출되어 결과를 반환하는 함수, 전체적인 구조를 담당
function collectOddValues(arr) {
	let result = [];

	// helper - 실제 재귀 작업을 수행하는 함수
	function helper(helperInput) {
		// 종료 조건(base case)
		if (helperInput.length === 0) {
			return;
		}

		// 재귀 호출(recursion call)
		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}

		helper(helperInput.slice(1));
	}

	helper(arr);

	return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 3, 5, 7, 9]
