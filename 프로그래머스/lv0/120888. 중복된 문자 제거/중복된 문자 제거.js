const solution = (my_string) => {
    const arr = new Set(my_string)
    return [...arr].join("")
}