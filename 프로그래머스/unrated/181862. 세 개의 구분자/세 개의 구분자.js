const solution = (myStr) => {
    const answer = myStr.split(/[abc]/).filter(v => v !== "")
    return answer.length > 0 ? answer : ["EMPTY"]
}