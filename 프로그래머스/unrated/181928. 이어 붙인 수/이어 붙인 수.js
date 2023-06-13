function solution(num_list) {
    const evenNum = num_list.filter(e=>e%2===0).join("")
    const oddNum = num_list.filter(e=>e%2===1).join("");
    return Number(evenNum) + Number(oddNum);
}