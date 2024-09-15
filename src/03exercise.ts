class Song {
    protected title: string; 
    protected musicGenre: string;
    private autor: string = "undefined";

    constructor(title: string, musicGenre: string) {
        this.title = title;
        this.musicGenre = musicGenre;
    }

    get receiveAutorName() {
        return this.autor;
    }

    set giveAutorName(autor: string) {
        this.autor = autor;
    }

    public infoSong() {
        return `Title: ${this.title}, Music Genre: ${this.musicGenre}, Autor: ${this.autor}`;
    }
}

const song = new Song("Nonsense", "Pop");
song.giveAutorName = "Sabrina Carpenter";

export const $03exercise = () => {
  const $element = document.getElementById("exercise-3");
  $element!.innerHTML += `
      <h2>EJERCICIO 3.</h2>
      <p>Crea una clase llamada Canción:</p>
        <p>Métodos: </p>
         <ol>
            <li>Crear un constructor que reciba como parámetros el título y género de la canción.</li>
            <li>Crear un constructor que reciba como parámetros el título y género de la canción.</li>
            <li>Crea un método para mostrar los datos de la canción. </li>
        </ol>
        <p>${song.infoSong()}</p>
      `;
};
