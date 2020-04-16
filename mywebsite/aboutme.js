$(function () {

   
    $('.carousel').carousel({
        interval: 2000
      })
    $("#bigStar").click(function () {
        $(".ball").animate({ "height": "65%", "width": "100%","border-radius":"50px","opacity":"1"})
        $("#pxMan").animate({ "height": "70%", "width": "12%","opacity":"1"})
        $("#bigStar").animate({"fontSize":"18px"}).fadeTo(1000,0)
        setInterval(function(){
            $(".imgGp i").fadeToggle(500)
        },2000);
            if ($(window).width() <= 768) { 
        $(".content2").animate({"line-height":"2em"})
        $(".imgGp i").remove()
            } else if ($(window).width() > 768) { 
                $(".content2").animate({"line-height":"4em"})
                $(".imgGp i").animate({"opacity":"1"})
            }})
    $("input").keydown(function(){
    $("form .remove").remove();
    $(".field label").append("(Just Kidding)")
    $("textarea").text("I am so happy that you try to contact me, but actually, you can never contact me unless you send me an eMail. ;D")
    $("input[type=submit]").attr("value","Not a submit button")
    })
    $("input[type=submit]").click(function(event){
        event.preventDefault();
        $("#form").slideUp(2000)
        $(".underCons img").slideDown(2000)
        let sorry = $("<div></div>").text("Your form cannot deliver to me :D")
        $(".underCons").before(sorry);
      })
    });     