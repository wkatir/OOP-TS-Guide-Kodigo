class Song {
  protected title: string;
  protected musicGenre: string;
  private autor: string;

  constructor(title: string, musicGenre: string) {
    this.title = title;
    this.musicGenre = musicGenre;
    this.autor = "undefined";
  }

  get autorName() {
    return this.autor;
  }

  set autorName(autor: string) {
    this.autor = autor;
  }

  public infoSong(): string {
    return `
          <p>Title: ${this.title}</p>
          <p>Music Genre: ${this.musicGenre}</p>
          <p>Author: ${this.autor}</p>`;
  }
}

const song = new Song("Nonsense", "Pop");
song.autorName = "Sabrina Carpenter";

export const $03exercise = (): void => {
  const $element = document.getElementById("exercise-3");
  if ($element) {
    $element.innerHTML += `
      <h2>EXERCISE 3.</h2>
      <p>Create a class called Song:</p>
      <div class="container-class">
          ${song.infoSong()}
      </div>
      `;
  }
};
