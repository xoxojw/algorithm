function solution(a, b) {
// reducer의 네 가지 파라미터
// array : reduce()를 호출한 배열
// acc : 이전의 누적 결과 반환
// cur value : 현재 처리하는 요소
// cur index : 현재 처리하는 요소의 인덱스
    
// 0 => acc의 초기값 설정
// 초기값을 설정해주지 않으면 초기값이 a[0]으로 자동 설정되어 a[0] + acc로 값이 계산됨
    
    return a.reduce((acc, _, i) => acc += a[i]*b[i], 0)
}