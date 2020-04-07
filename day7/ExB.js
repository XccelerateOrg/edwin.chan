class Player{
    constructor(name,health){
        this.name=name;
        this.health=health;
    }
    attack(opponent){
        return opponent.health-=10;
    }
    heal(){
        return this.health+=5;
    }
}
let david = new Player("David",100);
let peter = new Player("Peter",100);


let arr = [david,peter];


function fight(){
    while(0<david.health||0<peter.health){
    let dice = Math.floor(Math.random()*Math.floor(2));
    let attacker = arr[dice];
    let defender = ((dice===1)?david:peter);
        attacker.attack(defender);
        console.log(`${defender.name} was attacked.`);
    if(0==david.health){
        console.log(`Peter is the winner`);
        break;
    } else if(0==peter.health){
        console.log(`David is the winner`);
        break;
    }
    }
}

fight();