function solution(name, yearning, photo) {
    const answer = [];
    
    for (let i=0; i<photo.length; i++) {
        let score = 0;
        for (let j=0; j<name.length; j++) {
            let [currentName, nameScore] = [name[j], yearning[j]];
            let count = photo[i].filter(v => v === currentName).length;
            score += count*nameScore;
        }
        answer.push(score);
    }
    
    return answer;
}