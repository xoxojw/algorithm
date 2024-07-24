// Write a function which takes in a string and returns counts of each character in the string.

// 1. Start with simple examples
charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:1, l:2, o:1}

// 2. Progress to more complex examples
charCount("my phone number is 182763"); // 공백도 고려할 것인지? $, _, 숫자같은 기호나 숫자가 들어간다면?
charCount("Hello hi"); // 대소문자는 어떻게 할 것인지? {h:2}? or {H:1, h:1}?

// 3. Explore examples with empty inputs
charCount(""); // null? false? undefined? error?

// 4. Explore examples with invalid inputs
// 문자열이 아닌 숫자, 객체, null을 반환한다면 어떻게 처리할 것인지?
