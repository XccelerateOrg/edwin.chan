const marks = [
    { mark: 99 }, { mark: 80 }, { mark: 60 }, { mark: 70 }, { mark: 50 },
    { mark: 67.6 }, { mark: 62.4 }, { mark: 87.5 }, { mark: 55 }
    ]

function arr(){
    let arr2=[];
    for(i=0;i<marks.length;i++){
        arr2.push(marks[i].mark);
    }
    return parseInt(arr2.reduce((acc,num)=>(acc+num))/marks.length);
}

console.log(arr(marks));
