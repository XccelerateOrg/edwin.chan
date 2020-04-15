$.ajax({
    url:"http://127.0.0.1:5500/data.json",
    type:"GET",
})
    .done(function(data){
        console.log("Hello");
        console.log(data);
    })