// THIS IS A BACKUP AFTER GETTING THE IMAGES ON THE SCREEN
// IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
// 1. The images max width should be 235px
// 2. The images must maintain their aspect ratio
// 3. The container id="mainMenu" has a max width of 1440px
// 4. The images should be centered in a row in the container and not overlap
// 5. The images should be responsive
import * as PIXI from 'pixi.js';
const app = new PIXI.Application();
await app.init({ resizeTo:'mainMenu', antialias: true });
document.getElementById('mainMenu').appendChild(app.canvas);

const imagePaths = [
  'assets/main-menu/swirl.svg',
  // 'assets/main-menu/ux.svg',
  // 'assets/main-menu/tiger.svg',
  // 'assets/main-menu/logos.svg',
  // 'assets/main-menu/eyes.svg',
  // 'assets/main-menu/me.svg'
];

// swirl ----
const swirlSvg = await PIXI.Assets.load({
  src: imagePaths[0],
  data: {
    parseAsGraphicsContext: true,
  }
});

const swirlGraphics = new PIXI.Graphics(swirlSvg);

const parentDiv = document.getElementById('mainMenu');

const parentWidth = parentDiv.clientWidth;

if (parentWidth >= 1440) {
  swirlGraphics.width = 1440 / 6;
  swirlGraphics.scale.y = swirlGraphics.scale.x; // Maintain aspect ratio
} else if (parentWidth <= 1440) {
  swirlGraphics.width = parentWidth / 6;
  swirlGraphics.scale.y = swirlGraphics.scale.x; // Maintain aspect ratio
}
if (swirlGraphics.width > 235) {
  swirlGraphics.width = 235;
  swirlGraphics.scale.y = swirlGraphics.scale.x; // Maintain aspect ratio
}

app.stage.addChild(swirlGraphics);