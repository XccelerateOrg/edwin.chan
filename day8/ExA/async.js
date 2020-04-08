var http=new XMLHttpRequest();


http.onreadystatechange=function(){
    if(http.readyState!==XMLHttpRequest.DONE){
        return
    } else if (http.status===200){
        console.log(http.responseText);
    } else {    
        console.log('error occurred' + http.status);
}
}

http.open("GET","http://127.0.0.1:8080/data.json");
http.send();