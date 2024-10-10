import * as PIXI from 'pixi.js';

// Create a new PIXI application
const app = new PIXI.Application();

// Initialize the app with a width and height
await app.init({ width: 640, height: 360 });

// Add the canvas to the document body
document.body.appendChild(app.canvas);

// load the PNG asynchronously
await PIXI.Assets.load('/assets/tiger.svg');
let sprite = PIXI.Sprite.from('/assets/tiger.svg');

// Add the sprite to the stage
app.stage.addChild(sprite);