const solution = (num, total) => {
    let startNum = total%num === 0 ? (total/num) - ((num-1)/2) : Math.floor(total/num) - ((num-2)/2);
    return Array(num).fill(startNum).map((v, i) => v+i);
}