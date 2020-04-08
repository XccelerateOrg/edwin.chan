function informMe(endpoint,value,callback){
var http = new XMLHttpRequest();
http.onreadystatechange = function  () {
    if(http.readyState != XMLHttpRequest.DONE) {
    return;
    } else if(http.status == 200) {
        let data = http.responseText
    callback(data);
        
    } else {
    console.log('error occurred' + http.status);
        }
    }
http.open('GET',`https://restcountries.eu/rest/v2/${endpoint}/${value}?fullText=true`,true);
http.send();
}

 const alertData = function (data){
     console.log('call back called')
    let data= JSON.parse(data)
     console.log(data);
}

console.log(informMe(,alertData));

