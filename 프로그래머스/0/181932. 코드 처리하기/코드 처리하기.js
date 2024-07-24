function solution(code) {
    let ret = '';
    let mode = 0;
    
    for (let i = 0; i < code.length; i++) {
        // 모드 전환
        if (code[i] === "1") {
            mode === 0 ? mode = 1 : mode = 0
        }
        
        if (code[i] !== "1" && i%2 === mode) {
            ret += code[i]
        }
    }
    
    return ret ? ret : "EMPTY";
}