class Player {
    
    play (song){
        this.currentlyPlayingSong = song;        
               this.isPlaying = true;
    };
    pause(){
        this.isPlaying = false;
    };
    resume(){
        if(this.isPlaying){
            throw new Error("Song is already playing");
        }
        this.isPlaying = true;
    }
    makeFavourite (){
        this.currentlyPlayingSong.persistFavoriteStatus(true)
    };
}

class Song{
    constructor(name,album,author){
        this.name=name
        this.album=album
        this.author=author
    }
    getDescription(){
        return( `The name of this song is ${this.name} and it is from the album ${this.album}. It is written by ${this.author}`)
    }
    isInSameAlbum(someSong){
        if(this.album!==someSong.album){
            return false
        } 
        return true
    }


    persistFavoriteStatus = function(value){

        throw new Error("Not Yet Implemented. ")

    };

};

// let player = new Player('stupid','bitch', 'ass')

module.exports = {Player,Song}
