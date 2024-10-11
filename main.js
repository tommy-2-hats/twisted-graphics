import * as PIXI from 'pixi.js';

// Create a new PIXI application
const app = new PIXI.Application();

// Initialize the app with a width and height
await app.init({ resizeTo: window, resizeTo: window });

// Add the canvas to the document body
document.body.appendChild(app.canvas);

// load the PNG asynchronously
await PIXI.Assets.load('/assets/main-menu/tiger.svg');
let sprite = PIXI.Sprite.from('/assets/main-menu/tiger.svg');

// Add the sprite to the stage
app.stage.addChild(sprite);

// Create a Graphics object, draw a rectangle and fill it
let obj = new PIXI.Graphics()
  .rect(10, 10, 200, 100)
  .fill(0xffff00);

// Add it to the stage to render
app.stage.addChild(obj)

