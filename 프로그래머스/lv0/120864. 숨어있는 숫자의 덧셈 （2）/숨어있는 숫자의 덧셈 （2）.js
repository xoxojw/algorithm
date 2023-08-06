const solution = (my_string) =>{
    const my_num = my_string.match(/\d+/g);
    return my_num ? my_num.map(Number).reduce((a, b) => a+b) : 0;
}