const solution = (n, words) => {
    let newWords = [words[0]];
    let order = 2;
    let turn = 1;
    
    for (let i=1; i<words.length; i++) {       
        let current = words[i];
        let previous = words[i-1];
        
        if (current[0] !== previous[previous.length-1] || newWords.includes(current)) return [order, turn];
        
        if (order >= n) {
            order = 1;
            turn += 1;
        } else order += 1;
        
        newWords.push(current);
    }
    
    return [0, 0];
}