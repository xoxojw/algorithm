const solution = (arr, idx) => {
    for (let i=idx; i<arr.length; i++) {
        if (arr[i] === 1) {return i}
    }
    return -1
}

// const solution=(a,i)=>a.indexOf(1,i);

// function solution(arr, idx) {
    // return arr.findIndex((v, i) => idx <= i && v === 1);
//}