function averageArr (array) {
    let sum = 0
    for (let i = 0; i < array; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
console.log(averageArr([1,2,3,4,5]));