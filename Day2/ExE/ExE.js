function maya(num){
    let key=["o","b","l","i","e","t","a","d","n","m"];
    return num.toString().split("").map(x=>x=key[x]).join("");
}

console.log(maya(7483932));