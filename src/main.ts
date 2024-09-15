import "./style.css";
import { $01exercise } from "./01exercise";
import { $02exercise } from "./02exercise";
import { $03exercise } from "./03exercise";
import { $04exercise } from "./04exercise";
import { $05exercise } from "./05exercise";

document.addEventListener("DOMContentLoaded", (): void => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
   <header class="header">
   <h1 class="header-title">OBJECT-ORIENTED PROGRAMMING GUIDE WITH TYPESCRIPT</h1>
  </header>
  <main class="main-container">
    <div class="exercises-container">
      <div id="exercise-1" class="exercise-card"></div>
      <div id="exercise-2" class="exercise-card"></div>
      <div id="exercise-3" class="exercise-card"></div>
      <div id="exercise-4" class="exercise-card"></div>
      <div id="exercise-5" class="exercise-card"></div>
    </div>
  </main>  
  <footer class="footer">
    <p>Wilmer Salazar</p>
  </footer>

  `;

  $01exercise();
  $02exercise();
  $03exercise();
  $04exercise();
  $05exercise();
});
