const solution = food => {
    let foodPlacement = '';
    
    // 물을 제외하고 첫번째 음식부터 반복
    for (let i=1; i<=food.length; i++) {
        // 음식이 짝수개일 때
        if (food[i]%2 === 0) {
            for (let j=1; j<=food[i]/2; j++) {
                foodPlacement+=i
            }
        // 음식이 홀수개일 때
        } else {
            for (let k=1; k<=(food[i]-1)/2; k++) {
                foodPlacement+=i
            }
        }
    }
    
    let reversePlacement = [...foodPlacement].reverse().join("");
    let answer = foodPlacement+'0'+reversePlacement;
    
    return answer;
}