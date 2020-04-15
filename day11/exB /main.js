function informMe(endpoint,value){
$.ajax({
    url:`https://restcountries.eu/rest/v2/${endpoint}/${value}`,
    type:"GET",
})
    .done(function(data){
        console.log("Hello");
        console.log(data);
    })
    .fail(function(data){
        console.log("Fail");
    })
}

informMe("name", "germany");
