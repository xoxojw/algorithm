function sumRange(num) {
	if (num === 1) return 1; // 종료 조건
	return num + sumRange(num - 1); // 재귀 호출
}

sumRange(3);
// return 3 + sumRange(2)
// 							return 2 + sumRange(1)
//														return 1
// -> return 1+2+3 = 6

// 콜스택 쌓이는 순서: sumRange(3) -> sumRange(2) -> sumRange(1) -> 1 (종료 조건) / 제거는 역순
// 그 후 반환 1 -> 1+2 -> 1+2+3

sumRange(4);
// return 4 + sumRange(3)
//							return 3 + sumRange(2)
//														return 2 + sumRange(1)
//																					return 1
// -> return 1+2+3+4 = 10

// 콜스택 쌓이는 순서: sumRange(4) -> sumRange(3) -> sumRange(2) -> sumRange(1) -> 1
// 그 후 반환 1 -> 1+2 -> 1+2+3 -> 1+2+3+4
