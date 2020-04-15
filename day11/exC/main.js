$(function(){
function informMe(endpoint,value){
$.get(`https://restcountries.eu/rest/v2/${endpoint}/${value}`)
    .done(function(data){
        console.log("Hello");
        console.log(data);
    })
    .fail(function(data){
        console.log("Fail");
    })
}

informMe("name", "germany");
})