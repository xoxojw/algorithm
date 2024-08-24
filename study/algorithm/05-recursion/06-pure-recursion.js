// 05-helper-method-recursion의 헬퍼 메서드 재귀와 함께 참고
// 같은 문제를 두 가지 방식으로 풀어내는 다른 방식 (헬퍼 메서드 재귀 vs 순수 재귀)
function collectOddValues(arr) {
	let newArr = [];

	if (arr.length === 0) {
		return newArr;
	}

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(collectOddValues(arr.slice(1)));
	return newArr;

	// concat 대신 스프레드 연산자 사용가능
	// return [...newArr, ...collectOddValues(arr.slice(1))];
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
// [1].concat(collectOddValues([2, 3, 4, 5]))
//								[].concat(collectOddValues([3, 4, 5]))
//															[3].concat(collectOddValues([4, 5]))
//																							[].concat(collectOddValues([5]))
//																														[5].concat(collectOddValues([]))
//																																					[]
// -> [1], [], [3], [], [5], []가 concat으로 합쳐짐 -> 최종 newArr = [1, 3, 5]
