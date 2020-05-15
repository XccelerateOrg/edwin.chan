let fs = require("fs")


$(function(){
$('#notes').submit((e)=>{
    e.preventDefault();
    let val = $("textarea[name=text]").val()
    $("textarea[name=text]").val("")
    axios.post('/',val)
    .then((res)=>{
        // let data = JSON.parse(res)
        // console.log(data)
    })
    .catch((error) => { console.error(error) })
})

})