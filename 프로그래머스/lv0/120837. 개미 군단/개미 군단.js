function solution(hp) {
    const generalAnt = Math.floor(hp/5);
    const soldierAnt = Math.floor((hp-generalAnt*5)/3);
    const workingAnt = hp-generalAnt*5-soldierAnt*3;
    return generalAnt + soldierAnt + workingAnt;
}