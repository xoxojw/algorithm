function solution(price) {
    const discountPrice = price>=500000 ? price*0.8 : 500000>price && price>=300000 ? price*0.9 : 300000>price && price>=100000 ? price*0.95 : price;
    return Math.floor(discountPrice);
}