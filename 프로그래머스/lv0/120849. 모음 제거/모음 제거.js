function solution(my_string) {
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i=0; i<vowels.length; i++) {
        my_string = my_string.replaceAll(vowels[i], "");
    }
    return my_string;
}