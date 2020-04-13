console.log($("input[name=phone]"));
console.log($('tr:eq(2)'));
console.log($('section'));
console.log($("input[placeholder=Name]"));
console.log($("form > div:eq(-1)"));

let til = $("<title>");
til.html("Edwin's contact list application")
$("head").append(til)
$("table").css("color","red")
let btn = $("<button>")
btn.html("Clear")
$("form").append(btn)


const tr = $("<tr>",{class:"row"});
const td = [$("<td>"),$("<td>"),$("<td>")];
const contactAdd = function(name,phone,eMail){
        
        td[0].html(name);
        td[1].html(phone);
        td[2].html(eMail);
    let trtd = tr.append(td)
     $("tbody").append(trtd)}

contactAdd("Peter",123456789,"peter@gmail.com");

const nameVal=$("input[name=name]").val();
const phoneVal=$("input[name=phone]").val();
const eMailVal=$("input[name=email]").val();

$("input[name=name]").blur(function(){
    let nameVal=$("input[name=name]").val();
    if(nameVal.length>50){
        $(this).css("border","2px solid red");
        $(this).val()=0;
    } else {
        $(this).css("border","2px solid green");
    }
}
)
$("input[name=phone]").blur(function(){
    let phoneVal=$("input[name=phone]").val();
    if(phoneVal.match(/^\d{6,16}$/)){
            $(this).css("border","2px solid green");
        } else {
            $(this).css("border","2px solid red");
        }
}
)
$("input:eq(-1)").click(function(event){
    let nameVal=$("input[name=name]").val();
    let phoneVal=$("input[name=phone]").val();
    let eMailVal=$("input[name=email]").val();
    if(nameVal.length>50){
        $("input[name=name]").css("border","2px solid red");
        return false;} 

    if(!(phoneVal.match(/^\d{6,16}$/))){
        $("input[name=phone]").css("border","2px solid red");
        return false;}

    else{
        event.preventDefault();
        contactAdd(nameVal,phoneVal,eMailVal);
        $("input[type!=submit]").val("");
    }
})

