const solution = (picture, k) => {
    const answer = [];
    
    picture.map(v => {
        const el = [...v].map(l => l.repeat(k)).join("");
        for (let i=0; i<k; i++) answer.push(el);
    });
    
    return answer;
}