class User{
    constructor(firstName,lastName,email,DOB){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.DOB=DOB;
    }
}

function caller(){
    let http=new XMLHttpRequest();
    http.open("GET","https://randomuser.me/api/?results=5");
    http.onreadystatechange = function(){
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
            } else if(http.status == 200) {
                let data = JSON.parse(http.responseText);
                callback(data);
            } else {
            console.log('error occurred' + http.status);
                }
            }
    http.send();
    }


const callback = function(data){
    let arr2=[];
    for(i=0;i<5;i++){
    let arr = [firstName=data.results[i].name.first,
    lastName=data.results[i].name.last,
    email=data.results[i].email,
    DOB=data.results[i].dob]
    let user= new User(...arr);
    arr2.push(user);
    }
    console.log(arr2);
}

console.log(caller());