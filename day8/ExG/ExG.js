const idChildRemove = function (idName){
    let id=document.getElementById(idName);
    id.textContent="";
    return id;
}

console.log(idChildRemove("ntn"));