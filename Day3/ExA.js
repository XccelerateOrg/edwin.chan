

window.onscroll = function(){
    let top = window.scrollY;
    console.log(top);
    if(top>220){
        document.querySelector('.navbar').classList.add('active');
    } else { 
        document.querySelector('.navbar').classList.remove('active');
    }
}


