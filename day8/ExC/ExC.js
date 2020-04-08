function whoIsInSpace(){
    let http=new XMLHttpRequest();
    http.open("GET","./astros.json");
    http.onreadystatechange = function(){
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
            } else if(http.status == 200) {
                let data = http.responseText;
                callback(data);
            } else {
            console.log('error occurred' + http.status);
                }
            }
    http.send();
}

const callback = function(data){
    let data2 = JSON.parse(data);
    arr=data2.people.map(val=>val.name);
    console.log(arr);
} 

console.log(whoIsInSpace());