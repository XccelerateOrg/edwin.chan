//method 1
const reverseFunc = (num) => num.toString().split("").reverse();

console.log(reverseFunc(12345));

//method 2
function reversefunc2(num){
    let str = num.toString();
    let reverseNum = []
    for(i=0;i<num.length;i++){
        reverseNum+=str.unshift();
    }
    return reverseNum;
}
console.log(reverseFunc(12345));