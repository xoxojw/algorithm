// 시간 복잡도
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
} // O(n)

function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
} // O(1)

function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
      console.log(i);
  }
} // O(n)

function logAtMost10(n) {
	for (var i = 1; i <= Math.min(n, 10); i++) {
		console.log(i);
	}
} // O(1)

function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
          newArray[i / 2] = array[i];
      }
  }
  return newArray;
} // O(n)

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
      var subtotal = 0;
      for (var j = 0; j <= i; j++) {
          subtotal += array[j];
      }
      subtotalArray[i] = subtotal;
  }
  return subtotalArray;
} // O(n^2)


// 공간 복잡도
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
	total += arr[i];
  }
  return total;
} // 😑 O(n) / ✅ O(1) space 공간으로 할당되는 것은 숫자타입인 `total`과 `i`이다. `total`과 `i`는 모두 원시값이므로 위 함수의 공간 복잡도는 `O(1)`이다.

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
} // O(n) space

// const arr1 = new Array(3).fill(1)
// const arr2 = new Array(9).fill(1)
// const arr3 = new Array(27).fill(1)

// console.log(double(arr2))

function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
      console.log(i);
  }
} // O(1)

function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
  }
} // O(1)

function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
          newArray[i / 2] = array[i];
      }
  }
  return newArray;
} // O(n)

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
      var subtotal = 0;
      for (var j = 0; j <= i; j++) {
          subtotal += array[j];
      }
      subtotalArray[i] = subtotal;
  }
  return subtotalArray;
} // O(n)