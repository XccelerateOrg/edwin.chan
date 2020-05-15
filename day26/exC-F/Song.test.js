let Class = require("./class")
beforeEach(function(){
expect.extend({
    toBeInTheSameAlbumAs(anothersong,song){
        const pass = anothersong.album==song.album
        if(pass){
            return{
                message:()=>
                    `WoW, same album!`
                ,
                pass:true,
            }
        }else{
            return{
                message:()=>
                    `ummm, different album`
                ,
                pass:false,
            }

        }

    }
})})

describe("Let's text the properties and method!",()=>{
    
    let song = new Class.Song('Bohemian Rhapsody','A Night at the Opera','Mercury')
    let anothersong = new Class.Song('Seaside Rendezvous','A Night at the Opera','Mercury')

    test("name?",()=>{
        expect(song.name).toBe("Bohemian Rhapsody")
    })
    test("author?",()=>{
        expect(song.author).toBe("Mercury")
    })
    test("album?",()=>{
        expect(song.album).toBe("A Night at the Opera")
    })
    test("statement",()=>{
        expect(song.getDescription()).toBe("The name of this song is Bohemian Rhapsody and it is from the album A Night at the Opera. It is written by Mercury")
    })
    test("same album??",()=>{
        expect(song.isInSameAlbum(anothersong)).toBe(true)
    })
    test("same album??",()=>{
        expect(song).toBeInTheSameAlbumAs(anothersong)
    })
}
)