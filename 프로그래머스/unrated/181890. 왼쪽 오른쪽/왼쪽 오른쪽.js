const solution = (str_list) => {
    const index = str_list.findIndex(i => i === 'l' || i === 'r');
    
    if (index === -1) return [];
    else if (str_list[index] === "l") return str_list.slice(0, index);
    else return str_list.slice(index+1, str_list.length)
}