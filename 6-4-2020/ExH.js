const letterArray = [...('abcdefghijklmnopqrstuvwxyz')];

function move(str){
    let arr=[];
    for(i=0;i<str.length;i++){
        let indexNum = str.charCodeAt(i)+10;
        if(indexNum>122){
        
        } else {
            arr.push(str.charCodeAt(i)+10);
        }
    }
    
    return arr;
}
console.log(move('abd'));