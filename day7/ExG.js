class Bird{
    constructor(name){
        this.name=name;
    }
    fly(){
        return `A ${this.name} can fly.`
    }
    eggs(){
        return `A ${this.name} is laying eggs.`
    }
}

class Bat extends Bird{
    constructor(name){
        super(name);
    }
    eggs(){
        return `A ${this.name} is not laying eggs.`
    }
}

class Fish extends Bird{
    constructor(name){
        super(name);    
    }
    fly(){
        return `A ${this.name} can not fly.`
    }
    swim(){
        return `A ${this.name} can swim.`
    }
}

class Whale extends Fish{
    constructor(name){
        super(name);    
    }
    eggs(){
        return `A ${this.name} is not laying eggs.`
}
}

const bat = new Bat("bat");
const fish = new Fish("fish");
const bird = new Bird("bird");
const whale = new Whale("whale");

console.log(fish.fly());
console.log(bird.fly());
console.log(bat.fly());
console.log(whale.fly());