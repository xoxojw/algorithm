# 검색 알고리즘 (Searching Algorithms)

> 선형 검색, 정렬된 배열에서의 이진 검색, 단순 문자열 검색 알고리즘과 KMP 문자열 알고리즘

## 📌 선형 검색(Linear Search)

가장 간단한 방법은 원하는 값이 나올 때까지 배열의 모든 요소를 검색하는 것이다. 이와 같은 방법이 선형 검색이다.

- **정렬되지 않은 배열**에서 사용
- `indexOf`, `includes`, `find`, `findIndex`
- `O(1)` Best < `O(n)` Average < `O(n)` Worst
  - 선형 검색 시 최악의 경우에는 `O(n)`의 시간 복잡도를 가짐
  - 배열의 길이가 길어질수록 더 많은 연산을 수행

## 📌 이진 검색(Binary Search)

- **정렬된 배열**에서만 작동
  - ex. 숫자 가장 작은 수 → 가장 큰 수, 문자열 알파벳 순서 등
- 선형 검색보다 훨씬 빠른 형태의 검색 방법
- 한 번에 하나의 요소를 제거하는 대신, 남아있는 요소의 절반을 한 번에 제거
- `분할과 정복(Divide and Conquer)`로 구현