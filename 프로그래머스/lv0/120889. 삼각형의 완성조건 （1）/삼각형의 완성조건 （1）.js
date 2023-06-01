function solution(sides) {
    let sortSides = sides.sort();
    return sortSides[0] + sortSides[1] > sortSides[2] ? 1 : 2;
}