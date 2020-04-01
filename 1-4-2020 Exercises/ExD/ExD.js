function filter(num){
    (num<0)?num=0:(typeof num!=="number")?num="ERROR":(num>=1000000)?num:num;
    while (num<1000000&&num>0){
        num=num*10;
    }
    return num;
}

console.log(filter("apple"));
console.log(filter(1200));
console.log(filter(-200));