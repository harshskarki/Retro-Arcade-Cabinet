# 🕹️ CSS QUEST: Cyberpunk Arcade Maze

A fully playable, 3D, neon-drenched arcade cabinet built to push the limits of pure CSS and Vanilla JavaScript.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

---

## 📖 About The Project

**CSS Quest: Cyberpunk Arcade Maze** is a grid-based maze crawler built using **HTML, CSS, and Vanilla JavaScript**.

Unlike modern browser games that rely on the HTML5 Canvas API or heavy game engines, this project demonstrates how far pure CSS can be pushed. The arcade cabinet, CRT monitor effects, neon lighting, player animations, and victory states are all rendered through CSS, while JavaScript acts only as a lightweight controller for movement and collision detection.

The result is a retro-futuristic arcade experience that combines cyberpunk aesthetics with modern CSS techniques.

---

## ✨ Features

- 🎮 Fully playable maze game
- 🕹️ Retro 3D arcade cabinet design
- 📺 CRT monitor simulation with scanlines and screen glare
- ⚡ GPU-accelerated player movement using CSS variables
- 🌈 Neon cyberpunk visual effects
- 🧱 CSS Grid-based maze layout
- 🎯 Dynamic goal tile with radar animation
- 🏆 Animated victory screen and effects
- 📱 Lightweight and dependency-free
- 🚀 Built entirely with Vanilla Web Technologies

---

## 🛠️ Technical Highlights

### CSS Grid Mapping
The maze is constructed using a 6×6 CSS Grid layout where each cell functions as either a wall or a path.

### State-Driven CSS Variables
JavaScript updates the player's coordinates using CSS custom properties (`--x` and `--y`), while CSS handles rendering and movement through `transform: translate()`.

### Advanced Pseudo-Elements
Arcade cabinet side panels, control buttons, CRT reflections, and decorative elements are generated using `::before` and `::after`, keeping the HTML structure clean and minimal.

### GPU-Accelerated Animations
Movement, neon glows, pulses, radar rotations, and transitions are optimized using CSS transforms and animations.

### Cyberpunk Styling
Multiple layered shadows, gradients, scanlines, reflections, and glow effects create a futuristic arcade atmosphere.

---

## 🎮 How To Play

### Objective
Guide the glowing neon orb through the maze and reach the radar portal.

### Controls

| Key | Action |
|------|--------|
| ⬆️ Arrow Up | Move Up |
| ⬇️ Arrow Down | Move Down |
| ⬅️ Arrow Left | Move Left |
| ➡️ Arrow Right | Move Right |

### Rules

- Move through open paths only.
- Walls cannot be crossed.
- Reach the goal tile to win.
- Complete the maze in as few moves as possible.

---

## 📂 Project Structure

```text
CSS-Quest/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Run Locally

No frameworks, build tools, or installations required.

### Clone the repository

```bash
git clone https://github.com/harshskarki/CSS-Quest.git
```

### Navigate into the project

```bash
cd CSS-Quest
```

### Open in Browser

Simply open:

```text
index.html
```

in any modern browser such as Chrome, Firefox, Edge, or Safari.

---

## 💻 Built With

- HTML5
- CSS3
- Vanilla JavaScript

---

## 🎨 CSS Techniques Used

- CSS Variables
- CSS Grid
- CSS Animations
- Keyframes
- Transforms
- Pseudo Elements
- Layered Box Shadows
- Radial Gradients
- Linear Gradients
- Conic Gradients
- Responsive Layout Principles

---

## 🛣️ Future Roadmap

- [ ] Theme Switcher (Matrix / Synthwave / Retro Arcade)
- [ ] Mobile Responsive Scaling
- [ ] CRT Power-On Animation
- [ ] Sound Effects
- [ ] Move Counter
- [ ] Speed Run Timer
- [ ] Multiple Maze Levels
- [ ] Procedural Maze Generation
- [ ] Achievement System

---

## 📸 Preview

Add a screenshot or GIF here:

```text
assets/preview.png
```

---

## 👨‍💻 Author

**Harshvardhan Singh Karki**

- GitHub: https://github.com/harshskarki
- Portfolio: https://harshvardhan-dev-seven.vercel.app/

---

## ⭐ Support

If you enjoyed this project, consider giving the repository a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.

---

### "Built to prove that CSS can be more than styling — it can be the game engine itself."
