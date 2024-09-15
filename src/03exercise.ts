class Song {
    protected title: string; 
    protected musicGenre: string;
    private autor: string = "undefined";

    constructor(title: string, musicGenre: string) {
        this.title = title;
        this.musicGenre = musicGenre;
    }

    get ReceiveAutorName() {
        return this.autor;
    }

    set GiveAutorName(autor: string) {
        this.autor = autor;
    }

    public infoSong() {
        return `Title: ${this.title}, Music Genre: ${this.musicGenre}, Autor: ${this.autor}`;
    }
}

const song = new Song("Nonsense", "Pop");
song.GiveAutorName = "Sabrina Carpenter";

export const $03exercise = () => {
  const $element = document.getElementById("exercise-3");
  $element!.innerHTML += `
    <h2>EXERCISE 3.</h2>
    <p>Create a class called Song:</p>
    <p>Methods:</p>
    <ol>
        <li>Create a constructor that takes the title and genre of the song as parameters.</li>
        <li>Create a method to display the song's details.</li>
    </ol>
    <p>${song.infoSong()}</p>
      `;
};
