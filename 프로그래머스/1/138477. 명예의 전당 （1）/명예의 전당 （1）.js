const solution = (k, score) => {
    let hallOfFame = [];
    let LowestScores = [];
    
    for (let todayScore of score) {
        hallOfFame.push(todayScore);
        hallOfFame.sort((a, b) => b - a).splice(k);
        LowestScores.push(hallOfFame[hallOfFame.length-1]);
    }
    
    return LowestScores;
}