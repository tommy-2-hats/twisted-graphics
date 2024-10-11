import * as PIXI from 'pixi.js';

// Create a new PIXI application
const app = new PIXI.Application();

// Initialize the app with a width and height
await app.init({ resizeTo: window, antialias: true });

// Add the canvas to the document body
document.getElementById('mainMenu').appendChild(app.canvas);

// Get the width of the mainMenu [PARENT] div
const mainMenuDiv = document.getElementById('mainMenu');
const mainMenuWidth = mainMenuDiv.clientWidth;
console.log("Div Width: " + mainMenuWidth);

// Load the SVGs
const imagePaths = [
  'assets/main-menu/swirl.svg',
  'assets/main-menu/ux.svg',
  'assets/main-menu/tiger.svg',
  'assets/main-menu/logos.svg',
  'assets/main-menu/eyes.svg',
  'assets/main-menu/me.svg'
];
//--------------------------------------------------
// swirl -------------------------------------------
//--------------------------------------------------
const swirlSvg = await PIXI.Assets.load({
  src: imagePaths[0],
  data: {
    parseAsGraphicsContext: true,
  }
});
const swirlGraphics = new PIXI.Graphics(swirlSvg);
const swirlBounds = swirlGraphics.getLocalBounds();
swirlGraphics.pivot.set(swirlBounds.x + swirlBounds.width / 2, swirlBounds.y + swirlBounds.height / 2);
swirlGraphics.position.set(swirlBounds.width / 2, swirlBounds.height / 2);
app.stage.addChild(swirlGraphics);
//--------------------------------------------------
// ux ---------------------------------------------
//--------------------------------------------------
const uxSvg = await PIXI.Assets.load({
  src: imagePaths[1],
  data: {
    parseAsGraphicsContext: true,
  },
});
const uxGraphics = new PIXI.Graphics(uxSvg);
const uxBounds = uxGraphics.getLocalBounds();
uxGraphics.pivot.set(uxBounds.x + uxBounds.width / 2, uxBounds.y + uxBounds.height / 2);
uxGraphics.position.set(uxBounds.width / 2, uxBounds.height / 2);
uxGraphics.position.x += uxGraphics.width;
app.stage.addChild(uxGraphics);
//--------------------------------------------------
// tiger -------------------------------------------
//--------------------------------------------------
const tigerSvg = await PIXI.Assets.load({
  src: imagePaths[2],
  data: {
    parseAsGraphicsContext: true,
  },
});
const tigerGraphics = new PIXI.Graphics(tigerSvg);
const tigerBounds = tigerGraphics.getLocalBounds();
tigerGraphics.pivot.set(tigerBounds.x + tigerBounds.width / 2, tigerBounds.y + tigerBounds.height / 2);
tigerGraphics.position.set(tigerBounds.width / 2, tigerBounds.height / 2);
tigerGraphics.position.x += (tigerGraphics.width * 2);
app.stage.addChild(tigerGraphics);
//--------------------------------------------------
// logos -------------------------------------------
//--------------------------------------------------
const logosSvg = await PIXI.Assets.load({
  src: imagePaths[3],
  data: {
      parseAsGraphicsContext: true,
  },
});
const logosGraphics = new PIXI.Graphics(logosSvg);
const logosBounds = logosGraphics.getLocalBounds();
logosGraphics.pivot.set(logosBounds.x + logosBounds.width / 2, logosBounds.y + logosBounds.height / 2);
logosGraphics.position.set(logosBounds.width / 2, logosBounds.height / 2);
logosGraphics.position.x += (logosGraphics.width * 3);
app.stage.addChild(logosGraphics);
//--------------------------------------------------
// eyes --------------------------------------------
//--------------------------------------------------
const eyesSvg = await PIXI.Assets.load({
  src: imagePaths[4],
  data: {
      parseAsGraphicsContext: true,
  },
});
const eyesGraphics = new PIXI.Graphics(eyesSvg);
const eyesBounds = eyesGraphics.getLocalBounds();
eyesGraphics.pivot.set(eyesBounds.x + eyesBounds.width / 2, eyesBounds.y + eyesBounds.height / 2);
eyesGraphics.position.set(eyesBounds.width / 2, eyesBounds.height / 2);
eyesGraphics.position.x += (eyesGraphics.width * 4);
app.stage.addChild(eyesGraphics);
//--------------------------------------------------
// me ----------------------------------------------
//--------------------------------------------------
const meSvg = await PIXI.Assets.load({
  src: imagePaths[5],
  data: {
      parseAsGraphicsContext: true,
  },
});
const meGraphics = new PIXI.Graphics(meSvg);
const meBounds = meGraphics.getLocalBounds();
meGraphics.pivot.set(meBounds.x + meBounds.width / 2, meBounds.y + meBounds.height / 2);
meGraphics.position.set(meBounds.width / 2, meBounds.height / 2);
meGraphics.position.x += (meGraphics.width * 5);
app.stage.addChild(meGraphics);