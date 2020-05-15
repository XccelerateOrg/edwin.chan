let Sith = require("./starwars").Sith
let Jedi = require("./starwars").Jedi

describe("tesing the class jedi",function(){
    let sith
    let jedi
    beforeEach(()=>{
     sith = new Sith("Darth Vader",500,10000)
     jedi = new Jedi("Yoda",700,8000)
    })
    test("testing name of new member",()=>{
        expect(jedi.name).toBe("Yoda")
    })
    test("testing power of new member",()=>{
        expect(jedi.power).toBe(700)
    })
    test("testing health of new member",()=>{
        expect(jedi.health).toBe(8000)
    })
    test("jedi attack the right opponent",()=>{
        const spyAttack = jest.spyOn(jedi,"attack")
        jedi.attack(sith)
        expect(spyAttack).toHaveBeenCalledWith(sith)
    })
    test("jedi's opponent are injured",()=>{
        const spyInjure = jest.spyOn(sith,"injure")
        jedi.attack(sith)
        expect(spyInjure).toBeCalled()
    })
    test("when jedi is injured by opponent",()=>{
        const spyInjure = jest.spyOn(jedi,"injure")
        sith.attack(jedi)
        expect(spyInjure).toBeCalled()
    })
    test("jedi is dealing the right amount of damges",()=>{
        let fullHealth = sith.health
        sith.injure(5000)
        expect(sith.health).toBe(fullHealth-5000)
    })
    test("jedi is really dead?",()=>{
        const spyDead = jest.spyOn(jedi,"dead")
        spyDead.mockImplementation(()=>true)
        jedi.injure(8000)
        expect(spyDead).toBeTruthy()
    })
})