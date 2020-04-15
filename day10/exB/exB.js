
drippingTap = function () {
    setTimeout(function () {
        turnOffTap();
    }, 7000);

     dropper = setInterval(
        function () { console.log("drop"); }, 1000);


}
function turnOffTap() {
    clearInterval(dropper);
}

drippingTap();







