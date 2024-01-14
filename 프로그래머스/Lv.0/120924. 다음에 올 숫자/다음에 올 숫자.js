function solution(common) {
    // const isAP = common[1]-common[0] === common[2]-common[1]
    // const diff = common[1]-common[0]
    // const ratio = common[1]/common[0]
    // const lastElement = common[common.length-1]
    // return isAP ? lastElement+diff : lastElement*ratio
    
    return common[1]-common[0] === common[2]-common[1] ? common[common.length-1]+common[1]-common[0] : common[1]/common[0]*common[common.length-1]
}