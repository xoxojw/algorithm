// Write a function which takes in a string and returns counts of each character in the string.

// function charCount(str) {
// 	let obj = {};
// 	for (let i = 0; i < str.length; i++) {
// 		let char = str[i].toLowerCase();
// 		// 영숫자가 아닌 공백, 기호 등은 제거하도록 정규식 추가
// 		if (/[a-z0-9]/.test(char)) {
// 			if (obj[char]) {
// 				obj[char]++;
// 			} else {
// 				obj[char] = 1;
// 			}
// 		}
// 	}
// 	return obj;
// }

function charCountWithRegExp(str) {
	let obj = {};
	// for문보다 for ... of문을 사용하면 char를 다시 정의할 필요 없이 바로 문자 출력 가능
	// 인덱스 숫자로 개별 문자를 바꾸는 불필요한 단계를 줄일 수 있음
	for (let char of str) {
		char = char.toLowerCase();
		if (/[a-z0-9]/.test(char)) {
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}

console.log("charCountWithRegExp ", charCountWithRegExp("Hello Hi!"));

// -----------------------------------------------------------------------------

function charCountWithCharCodeAt(str) {
	let obj = {};
	for (let char of str) {
		if (isAlphaNumeric(char)) {
			char = char.toLowerCase();
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}

// 정규표현식이 아닌 charCodeAt 메서드를 사용할 수도 있음
// 정규표현식보다 문자코드를 이용하는 것이 더 성능 측면에서 좋다는 실험이 있으므로 성능을 고려하면 이 방법을 사용할 수도 있다.
// 참고 https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript
function isAlphaNumeric(char) {
	let code = char.charCodeAt(0);
	if (
		!(code > 47 && code < 58) && // numeric (0-9)
		!(code > 64 && code < 91) && // upper alpha (A-Z)
		!(code > 96 && code < 123) // lower alpha (a-z)
	) {
		return false;
	}
	return true;
}

console.log("charCountWithCharCodeAt ", charCountWithCharCodeAt("Hello Hi!"));
