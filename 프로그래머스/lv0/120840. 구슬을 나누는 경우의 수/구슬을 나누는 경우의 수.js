function solution(balls, share) {
    let nf = 1;
    let nminusmf = 1;
    let mf = 1;
    for (let i=balls; i>=1; i--) nf *= i;
    for (let j=(balls-share); j>=1; j--) nminusmf *= j;
    for (let k=share; k>=1; k--) mf *= k;
    
    return Math.round(nf/(nminusmf*mf))
}