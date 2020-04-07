 
function move(str){
    let arr=[];
    for(i=0;i<str.length;i++){
        let indexNum = str.charCodeAt(i)+10;
        if(indexNum>122){
            indexNum2=indexNum-122+96;
            arr.push(indexNum2);
        } else {
            arr.push(indexNum);
        }
    }
    return String.fromCharCode(...arr).split("");
}
console.log(move('zbd'));