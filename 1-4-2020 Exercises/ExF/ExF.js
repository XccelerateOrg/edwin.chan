function countChar(str,chr){
    let chr2 = new RegExp(chr,"ig")
    return str.match(chr2).length;
}

console.log(countChar("dividos","D"));

console.log(countChar("divid efqwe sdd os","D"));