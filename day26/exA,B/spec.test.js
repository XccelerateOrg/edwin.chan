// function testBlock(n){
//     return `I am in the test block ${n}`
// }

let testBlock = require("./exA")
describe("first test", () => {
    test("first", () => {
        expect(testBlock(1)).toBe("I am in the test block 1")
    })
    test("second", () => {
        expect(testBlock(2)).toBe("I am in the test block 2")
    })
    test("third", () => {
        expect(testBlock(3)).toBe("I am in the test block 3")
    })
    test("forth", () => {
        expect(testBlock(4)).toBe("I am in the test block 4")
    })
    test("fifth", () => {
        console.log("i am in the test block 5 but I fail")
        throw new Error()
    })
}
)