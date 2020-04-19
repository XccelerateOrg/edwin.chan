$(function () {
    let num = 1;
    arr = ["","","","","","","","",""]
    let winCon = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]]
    $(".bigSq .sq").click(function () {
        let o = $("<img>").attr("src", "O.png").css({ "width": "100%", "height": "100%" })
        let x = $("<img>").attr("src", "X.png").css({ "width": "100%", "height": "100%" })
        let index = $(this).attr("id").charAt(2) - 1
        if (num % 2 != 0 ) {
            $(this).append(o).attr('disabled','true')
            console.log($(this).text());
            arr[index] = "o"

        } else if (num % 2 === 0 ) {
            $(this).append(x).attr('disabled','true')
            arr[index] = "x"
        }
        num++
        console.log(arr);
        winner()
})
function winner () {
    for (i = 0; i < winCon.length; i++) {
        if (arr[winCon[i][0]] === "o"&& arr[winCon[i][1]] ==="o"&&  arr[winCon[i][2]] ==="o") {
            alert("o is the winner!")
            location.reload();
        } else if (arr[winCon[i][0]] === "x"&& arr[winCon[i][1]] ==="x"&&  arr[winCon[i][2]] ==="x") {
            alert("x is the winner!")
            location.reload();

        }
    }
}    
})