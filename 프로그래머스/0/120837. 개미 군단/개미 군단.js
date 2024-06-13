const solution = hp => {
    const [generalAP, soldierAP, workerAP] = [5, 3, 1];
    
    const generalNum = Math.floor(hp/generalAP);
    const soldierNum = Math.floor((hp-generalAP*generalNum)/soldierAP);
    const workerNum = Math.floor(hp-generalAP*generalNum-soldierAP*soldierNum);
    
    return generalNum+soldierNum+workerNum;
}