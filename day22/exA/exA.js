let arr1 = [4, 8, 2, 7, 5];

function processArray (arr, func){
    return func(arr)
}

function arrMult(arr){
    console.log(arr.map(x=>x*2))}

function arrPlus(arr){
    console.log(arr.map(x=>x+2))
}

processArray(arr1,arrMult)
processArray(arr1,arrPlus)