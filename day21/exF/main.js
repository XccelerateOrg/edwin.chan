const form = document.querySelector("#myForm")
let playerSelection
form.addEventListener("submit", function (e) {
    e.preventDefault()
    for(i=0;i<3;i++){
    if(form[i].checked===true){
        playerSelection=form[i].value
    }}
    console.log(playerSelection)
})

exports = playerSelection