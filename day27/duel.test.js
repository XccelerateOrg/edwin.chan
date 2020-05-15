let {duel,Sith,Jedi} = require('./starwars')

describe("testing duel function",()=>{
    let fobiwan 
    let fanakin
    let spyFightO
    let spyFightA
    let spyInjureO
    let spyInjureA
    beforeEach(()=>{
        fobiwan = new Jedi("fObiwan Kenobi",100,100);
        fanakin = new Sith("fAnakin Skywalker",100,100);

         spyFightO = jest.spyOn(fobiwan,"attack")
        .mockImplementation(()=>
        console.log('I am mock hitting the sith')
        )
         spyFightA = jest.spyOn(fanakin,"attack")
        .mockImplementation(()=>
        console.log('I am mock hitting the jedi')
        )
         spyInjureO = jest.spyOn(fobiwan,"injure")
        .mockImplementation(()=>
        console.log('I am mock injured')
        )
         spyInjureA = jest.spyOn(fanakin,"injure")
        .mockImplementation(()=>
        console.log('I am mock injured')
        )
        jest.useFakeTimers()
    })
    test("fight?",()=>{
        duel(fobiwan,fanakin)
        expect(spyFightA).toBeCalledTimes(6)
        expect(spyFightA).toBeCalledWith(fobiwan)
        expect(spyFightO).toBeCalledWith(fanakin)
        expect(spyFightO).toBeCalledTimes(6)
    })
    test("Injure?",()=>{
        duel(fobiwan,fanakin)
        expect(spyInjureA).toBeCalledTimes(1)
    })
    test("will he die?",()=>{
        let spyDeadA = jest.spyOn(fanakin,"dead").mockImplementation(()=>console.log("mock dead"))
        duel(fobiwan,fanakin)
        expect(spyDeadA).toBeCalledTimes(1)
        expect(fanakin.dead).toBeTruthy()
        
    })
    test('test timer',()=>{
        duel(fobiwan,fanakin)
        jest.advanceTimersByTime(5000)
        expect(setTimeout).toBeCalled()
        expect(fanakin.health).toBe(800)
        expect(fanakin.power).toBe(90)
    })

})