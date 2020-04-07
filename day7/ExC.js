class Monster {
    constructor(options){
        this.name=options.name;
        this.health=100;
    }
    wound(damage){
        this.health-=damage;
        if(this.health<=0){
            console.log("monster dead");
        }
    }
}

const monster = new Monster({name:"monster"})

const hero = function(){
    while(monster.health>0){
    let damages = Math.floor(Math.random() * (16)) + 5;
    console.log(monster.health);
    monster.wound(damages);
}
}

hero();