// let fs = require("fs")

$(function(){
$('.notes').submit((e)=>{
    e.preventDefault();
    let val = $("textarea[name=text]").val()
    $("textarea[name=text]").val("")
    axios.post('/',val)
    .then((res)=>{
        console.log(res.data)
        console.log('1111')
    })
    .catch((error) => { console.error(error) })
})

$('.notes .remove').on('click',(event)=>{
    console.log($(event.target).closest(".notes").attr('id'));
    axios
    .delete('/',{data:{id:$(event.target).closest(".notes").attr('id')}})
    .then((res)=>{
        $(`#${res.data}`).remove()
    })
})

$('.note textarea').on('blur',(event)=>{
    console.log($(event.target).closest(".notes").attr('id'));
    console.log($(event.currentTarget).val());
    axios
    .put('/',{data:{id:$(event.target).closest(".notes").attr('id'),value:$(event.currentTarget).val()}})
    .then((res)=>{
       console.log(res.data)
    })
})
})