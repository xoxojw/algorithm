// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// 빈도수 세기 패턴 X
// 시간 복잡도 - O(nlogn)
const mySolution = (str1, str2) => {
	if (str1.length !== str2.length) return false;
	if ([...str1].sort().join("") !== [...str2].sort().join("")) return false;
	return true;
};

// 빈도수 세기 패턴 O
// 시간 복잡도 - O(n)
const validAnagram = (str1, str2) => {
	if (str1.length !== str2.length) return false;

	const lookup = {};

	for (let i = 0; i < str1.length; i++) {
		let letter = str1[i];
		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
	}
	for (let i = 0; i < str2.length; i++) {
		let letter = str2[i];
		// can't find letter or letter is zero then it's not an anagram
		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter] -= 1;
		}
	}

	return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
