function transform(str){
    let arr=[,"a","b","c","d","e","f","g","h","i","g"];
    let str2 = str.split("").sort((x,y)=>x-y);
    return str2.map(x=>x.replace(/\w/,arr[x]));
} 

console.log(transform("2394123"));