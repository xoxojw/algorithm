const solution = (emergency) => {
    const index = [...emergency].sort((a, b) => b-a)
    return emergency.map(v => index.indexOf(v) + 1)
}