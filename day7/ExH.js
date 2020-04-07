class Abilities{
    constructor(name){
        this.name=name;
    }
    fly(){
        return `A ${this.name} can fly.`
    }
    eggs(){
        return `A ${this.name} is laying eggs.`
    }
    swim(){
        return `A ${this.name} can swim.`
    }
    feed(){
        return `A ${this.name} is feeding milk.`
    }
}

class Bat{
    constructor(name){
        this.name=new Abilities(name);
    }
    fly(){
        return this.name.fly();
    }
    feed(){
        return this.name.feed();
    }
}
class Bird{
    constructor(name){
        this.name=new Abilities(name);
    }
    fly(){
        return this.name.fly();
    }
    eggs(){
        return this.name.eggs();
    }
}
class Fish{
    constructor(name){
        this.name=new Abilities(name);
    }
    swim(){
        return this.name.swim();
    }
    eggs(){
        return this.name.eggs();
    }
}
class Whale{
    constructor(name){
        this.name=new Abilities(name);
    }
    swim(){
        return this.name.swim();
    }
    feed(){
        return this.name.feed();
    }
}



const bat = new Bat("bat");
const fish = new Fish("fish");
const bird = new Bird("bird");
const whale = new Whale("whale");


console.log(bat.fly());
console.log(bird.eggs());
console.log(fish.swim());
console.log(whale.feed());
