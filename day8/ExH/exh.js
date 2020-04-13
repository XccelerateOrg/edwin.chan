$("document").ready(function(){
    $(".last").prepend()

    $(".box img").mouseover(function(){
    $(".box img").css("transform","scale(1.4)");
})

$(".box img").mouseleave(function(){
    $(".box img").css("transform","scale(1)");
})

$("button").on("click",function(){
    $("#mainCover").css("opacity","0");
    $("#text").text("welcome to my flower shop");
    $("#text").css({"background-color":"blue","font-size":"3rem"});
    $("#text2").text("buy flowers");
    $("#text2").css("background-color","red");
    $(".container").css("display","flex");
})


})