// 다중 포인터 - isSubsequence
// 두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequence라는 함수를 작성합니다. 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.

// 솔루션에는 최소한 다음과 같은 복잡성이 있어야 합니다:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

// 솔루션1 - 투 포인터(반복) (시간 복잡도 O(n), 공간 복잡도 O(1))

const mySolution = (str1, str2) => {
	if (str1.length < 0 || str1.length > str2.length) return false;

	let i = 0;
	let j = 0;
	while (j < str2.length) {
		if (str1[i] === str2[j]) i++;
		if (i === str1.length) return true;
		j++;
	}
	return false;
};

function isSubsequence(str1, str2) {
	let i = 0;
	let j = 0;
	if (!str1) return true;
	while (j < str2.length) {
		if (str2[j] === str1[i]) i++;
		if (i === str1.length) return true;
		j++;
	}
	return false;
}

// 참고 - 재귀를 이용한 솔루션 (시간 복잡도 O(2^n) ,공간 복잡도 O(n))
function recursion(str1, str2) {
	if (str1.length === 0) return true;
	if (str2.length === 0) return false;
	if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
	return isSubsequence(str1, str2.slice(1));
}

// 예시:
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
