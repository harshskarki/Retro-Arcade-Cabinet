const gridCells = document.querySelectorAll('.cell');
const arcadeMachine = document.querySelector('.arcade-machine'); 
const gridSize = 6; 

let posX = 0;
let posY = 1; 
let isGameOver = false; 

// --- NEW: RANDOM GOAL GENERATOR ---
const validGoalTiles = [];

// 1. Loop through every cell on the board
gridCells.forEach((cell, index) => {
  // 2. If it is a path AND it is not the starting tile (index 6), add it to our list
  if (cell.classList.contains('path') && index !== 6) {
    validGoalTiles.push(cell);
  }
});

// 3. Pick a random tile from our valid list and add the 'goal' class
const randomTile = validGoalTiles[Math.floor(Math.random() * validGoalTiles.length)];
randomTile.classList.add('goal');
// ----------------------------------


// --- MOVEMENT CONTROLS ---
document.addEventListener('keydown', (e) => {
  if (isGameOver) return; 

  if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
      e.preventDefault();
  }

  let nextX = posX;
  let nextY = posY;

  if (e.key === 'ArrowUp') nextY--;
  if (e.key === 'ArrowDown') nextY++;
  if (e.key === 'ArrowLeft') nextX--;
  if (e.key === 'ArrowRight') nextX++;

  if (nextX >= 0 && nextX < gridSize && nextY >= 0 && nextY < gridSize) {
    const nextIndex = (nextY * gridSize) + nextX;
    
    if (!gridCells[nextIndex].classList.contains('wall')) {
      posX = nextX;
      posY = nextY;
      
      document.documentElement.style.setProperty('--x', posX);
      document.documentElement.style.setProperty('--y', posY);

      if (gridCells[nextIndex].classList.contains('goal')) {
        isGameOver = true; 
        arcadeMachine.classList.add('game-won'); 
      }
    }
  }
});