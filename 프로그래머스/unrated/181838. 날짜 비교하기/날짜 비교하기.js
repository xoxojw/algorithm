const solution = (date1, date2) => {
    return new Date(date2) > new Date(date1) ? 1 : 0;
}