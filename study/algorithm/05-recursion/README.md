# ⭐️ 재귀 (Recursion)

> 자기 자신을 호출하는 함수로, 특정 문제를 더 작은 하위 문제로 나누어 해결하는데 사용

## 📌 재귀함수를 알아야 하는 이유

### 어디에서나 사용되기 때문

- `JSON.parse` / `JSON.stringify`
- `document.getElementById` 및 DOM 탐색 알고리즘
  - DOM은 모든 요소가 중첩된 트리 구조로 되어있음
- 객체 순회
- 더 복잡한 알고리즘에서 매우 흔함
- 반복문보다 더 깔끔한 대안이 될 때가 있음

<br>

## 📌 콜스택

- 거의 모든 프로그래밍 언어에는 보이지 않는 곳에서 함수 호출을 관리하는 일종의 데이터 구조가 존재
  - 호출된 함수는 다른 함수가 return될 때까지 기다리는 경우가 많음
  - 자바스크립트의 경우에는 이 데이터 구조가 `콜스택`임

### 자료구조 stack

- 스택은 종이 더미를 쌓는 구조와 비슷
- 함수를 호출하면, 콜스택의 가장 윗부분에 쌓임
- 자바스크립트가 `return` 키워드를 확인하거나, 함수 안에 더이상 실행할 코드가 없으면 컴파일러가 스택의 가장 위의 항목을 제거

### 콜스택과 재귀 함수

- 일반 함수의 경우에는 콜스택에 쌓이고, 함수 실행이 끝나면 제거되는 것을 반복
- 재귀 함수의 경우에는 계속해서 새로운 함수를 호출 스택에 추가
  - 동일한 함수를 계속 추가하는 것이고, 추가된 함수는 호출을 기다림

<br>

## 📌 재귀 함수의 두 가지 기본 요소

### 1. 종료 조건(Base Case)

> 재귀 함수가 더 이상 자기 자신을 호출하지 않고 종료되는 조건

- 종료 조건을 설정하지 않으면 함수는 무한히 자신을 호출하게 되어 스택 오버플로(stack overflow)가 발생
- 종료 조건은 문제를 더 이상 쪼갤 수 없을 정도로 단순한 상태로 만들고, 이 상태에서 바로 결과를 반환

### 2. 다른 입력값(Diffrent Input)

> 함수가 자기 자신을 호출할 때마다 이전 호출과는 다른 값을 사용하는 것

- 일반적으로 이 값은 원래 입력값에서 점진적으로 변형된 값임
- 이를 통해 재귀 호출이 점점 종료 조건에 가까워지도록 함
  - 만약 다른 입력값을 사용하지 않으면, 재귀 호출은 동일한 상태를 반복하게 되어 종료되지 않음

<br>

## 📌 재귀 함수를 사용할 때 자주 하는 실수

> 아래의 실수들은 스택 오버플로우를 발생시킨다.

### 종료 조건이 없거나 잘못된 경우

```js
function factorial(num) {
	return num * factorial(num - 1);
}
factorial(2); // Uncaught RangeError: Maximum call stack size exceeded
```

### return값이 없거나 잘못된 값 반환

```js
function factorial(num) {
	if (num === 1) console.log(1); // return값이 없음
	return num * factorial(num - 1);
}

factorial(2); // Uncaught RangeError: Maximum call stack size exceeded
```

```js
function factorial(num) {
	if (num === 1) return 1;
	return num * factorial(num); // 잘못된 값 반환
}

factorial(2); // Uncaught RangeError: Maximum call stack size exceeded
```

<br>

## 📌 헬퍼 메서드 재귀

> 앞서 작성했던 모든 재귀 함수는 팩토리얼처럼 단일 단독 함수(single standalone function)이다.

헬퍼 메서드 재귀는 재귀적이지 않은 외부 함수가 재귀적인 내부 함수를 호출하는 패턴을 의미한다.

- `outer 함수`: 외부에서 호출되며, 전체적인 구조를 담당
- `helper 함수`: 실제 재귀 작업을 수행하는 함수
- 주로 외부에서 사용할 변수나 데이터를 재귀 함수 내에서 쉽게 접근하거나 수정할 수 있도록 하기 위해 사용

```js
function outer(input) {
	var outerScopedVariable = [];

	function helper(helperInput) {
		// modify the outerScopedVariable
		helper(helperInput--);
	}

	helper(input);

	return outerScopedVariable;
}
```

## 📌 순수 재귀함수 사용 시 팁

- 배열의 경우 헬퍼 메서드 재귀를 사용하지 않는다면 원본 배열을 변경하지 않아야 함
  - 이를 위해 `slice`, 스프레드 연산자, `concat`과 같은 메서드를 사용하여 배열의 복사본을 만들 것
- 문자열은 불변(immutable)이므로, 문자열을 복사하려면 `slice`, `substr`, `substring`과 같은 메서드를 사용
- 객체를 복사하려면 `Object.assign`이나 스프레드 연산자를 사용

<br>
