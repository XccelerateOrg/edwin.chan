let Sith = require("./starwars").Sith
let Jedi = require("./starwars").Jedi

describe("tesing the class Sith",function(){
    let sith
    let jedi
    beforeEach(()=>{
     sith = new Sith("Darth Vader",500,10000)
     jedi = new Jedi("Yoda",700,8000)
    })
    test("testing name of new member",()=>{
        expect(sith.name).toBe("Darth Vader")
    })
    test("testing power of new member",()=>{
        expect(sith.power).toBe(500)
    })
    test("testing health of new member",()=>{
        expect(sith.health).toBe(10000)
    })
    test("sith attack the right opponent",()=>{
        const spyAttack = jest.spyOn(sith,"attack")
        sith.attack(jedi)
        expect(spyAttack).toHaveBeenCalledWith(jedi)
    })
    test("sith's opponent are injured",()=>{
        const spyInjure = jest.spyOn(jedi,"injure")
        sith.attack(jedi)
        expect(spyInjure).toBeCalled()
    })
    test("when sith is injured by opponent",()=>{
        const spyInjure = jest.spyOn(sith,"injure")
        jedi.attack(sith)
        expect(spyInjure).toBeCalled()
    })
    test("sith is dealing the right amount of damges",()=>{
        let fullHealth = sith.health
        sith.injure(5000)
        expect(sith.health).toBe(fullHealth-5000)
    })
    test("sith is really dead?",()=>{
        const spyDead = jest.spyOn(sith,"dead")
        spyDead.mockImplementation(()=>true)
        sith.injure(10000)
        expect(spyDead).toBeTruthy()
    })
})