// 팩토리얼: 재귀 함수 사용법을 가장 고전적으로 설명하는 예시

// 재귀가 아닌 일반 반복문으로 구현
// function factorial(num) {
// 	let total = 1;
// 	for (let i = num; i > 1; i--) {
// 		total *= i;
// 	}
// 	return total;
// }

// 재귀 함수로 구현
function factorial(num) {
	if (num === 1) return 1;
	return num * factorial(num - 1);
}

factorial(3);
// return 3 * factorial(2)
//							return 2 * factorial(1)
//													return 1
// -> return 1*2*3 = 6

factorial(5);
// return 5 * factorial(4)
//							return 4 * factorial(3)
//													return 3 * factorial(2)
//																			return 2 * factorial(1)
//																									return 1
// -> return 1*2*3*4*5 = 120
// 콜스택에 쌓이는 순서 factorial(5) -> factorial(4) -> factorial(3) -> factorial(2) -> factorial(1) -> 1
// 콜스택에서 제거되는 순서 가장 먼저 종료조건 1 반환 -> factorial(1) -> factorial(2) -> factorial(3) -> factorial(4) -> factorial(5)
