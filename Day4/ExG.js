function middle(arr){
    let arr2 = [0,1,2];
    let maxIn = arr.indexOf(Math.max(...arr));
    let minIn = arr.indexOf(Math.min(...arr));
    let arr3 = [maxIn,minIn];
    return arr2.filter(val=>!arr3.includes(val));
}

console.log(middle([2,3,1]));
console.log(middle([88, 7, 55 ]));

