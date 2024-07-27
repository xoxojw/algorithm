const solution = quiz => {
    const answer = [];
    for (let formula of quiz) {
        formula = formula.split(" ");
        
        if (formula[1] === "+") {
            Number(formula[0])+Number(formula[2]) === Number(formula[4]) ? answer.push("O") : answer.push("X");
        } else {
            Number(formula[0])-Number(formula[2]) === Number(formula[4]) ? answer.push("O") : answer.push("X");
        }
    }
    
    return answer;
}