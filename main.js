import * as PIXI from 'pixi.js';

// Create a new PIXI application
const app = new PIXI.Application();

// Initialize the app with a width and height
await app.init({ resizeTo: window, antialias: true });

// Add the canvas to the document body
document.getElementById('mainMenu').appendChild(app.canvas);

// Load the SVGs
const imagePaths = [
  'assets/main-menu/swirl.svg',
  'assets/main-menu/ux.svg',
  'assets/main-menu/tiger.svg',
  'assets/main-menu/logos.svg',
  'assets/main-menu/eyes.svg',
  'assets/main-menu/me.svg'
];

// load the SVGs asynchronously
const swirlSvg = await PIXI.Assets.load({
  src: imagePaths[0],
  data: {
      parseAsGraphicsContext: true,
  }
});
const uxSvg = await PIXI.Assets.load({
  src: imagePaths[1],
  data: {
      parseAsGraphicsContext: true,
  },
});
const tigerSvg = await PIXI.Assets.load({
  src: imagePaths[2],
  data: {
      parseAsGraphicsContext: true,
  },
});
const logosSvg = await PIXI.Assets.load({
  src: imagePaths[3],
  data: {
      parseAsGraphicsContext: true,
  },
});
const eyesSvg = await PIXI.Assets.load({
  src: imagePaths[4],
  data: {
      parseAsGraphicsContext: true,
  },
});
const meSvg = await PIXI.Assets.load({
  src: imagePaths[5],
  data: {
      parseAsGraphicsContext: true,
  },
});

const swirlGraphics = new PIXI.Graphics(swirlSvg);
const uxGraphics = new PIXI.Graphics(uxSvg);
const tigerGraphics = new PIXI.Graphics(tigerSvg);
const logosGraphics = new PIXI.Graphics(logosSvg);
const eyesGraphics = new PIXI.Graphics(eyesSvg);
const meGraphics = new PIXI.Graphics(meSvg);

app.stage.addChild(swirlGraphics);
app.stage.addChild(uxGraphics);
app.stage.addChild(tigerGraphics);
app.stage.addChild(logosGraphics);
app.stage.addChild(eyesGraphics);
app.stage.addChild(meGraphics);