$(windows).scroll(function(){
$('nav').toggleClass('scrolled',$(this).scrollTop()>800);
})