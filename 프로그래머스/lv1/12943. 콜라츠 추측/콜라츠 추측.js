const solution = (num) => {
    let result = 0;
    if (num === 1) return 0
    
    while (num !== 1) {
        if (num%2 === 0) {
            result++
            num /= 2
        } else {
            result++
            num = num*3 + 1
        }
    }
    
    if (result>500) return -1
    else return result
}