const solution = (phone_number) => {
    return [...phone_number].map((v, i) => i<=phone_number.length-5 ? "*" : v).join('')
}