const players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

//1
function barcelFilter (arr){
    for(i=0;i<arr.length;i++){
        (!(players[i].club.match(/Barcelona/)))?console.log(players[i].name):""
    }
} 

console.log(barcelFilter(players));

//2
function playersName (arr){
    let arr2 = [];
    for(i=0;i<arr.length;i++){
        arr2.push(arr[i].name);
    }
    return arr2;
}

console.log(playersName(players));