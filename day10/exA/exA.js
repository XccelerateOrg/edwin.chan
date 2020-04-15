$("document").ready(function(){
function prompt(){
    return alert("Insert a number into the input!")
}

setTimeout(prompt,10000);

const minuteAlarm = function (input){
    let date = new Date();
    if(input<1||input>60){
        return alert("Only allow 1-60 seconds input");
    } else if (input.match(/\D/g)){
        return alert("Input a digit");
    } else {
        setTimeout(function(){
            console.log(`Alarm ringing at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
        },input*1000)
    }
}

$("#form").submit(function(){
    event.preventDefault();
    let number=$("input[name=num]").val();
    minuteAlarm(number);
})
})