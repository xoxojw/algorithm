const solution = (arr) => {
    const getGCD = (x, y) => {
        while (y > 0) {
            let r = x%y;
            x = y;
            y = r;
        }
        return x;
    }
    
    const getLCM = (x, y) => {
        return Math.abs(x*y)/getGCD(x, y);
    }
    
    let lcm = arr[0];
    for (let i=1; i<arr.length; i++) {
        lcm = getLCM(lcm, arr[i]);
    }
    
    return lcm;
}