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

// Add a variable to count up the seconds our demo has been running
let elapsed = 0.0;
// Tell our application's ticker to run a new callback every frame, passing
// in the amount of time that has passed since the last tick
app.ticker.add((ticker) => {
  // Add the time to our total elapsed time
  elapsed += ticker.deltaTime;
  // Update the sprite's X position based on the cosine of our elapsed time.  We divide
  // by 50 to slow the animation down a bit...
  sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
});
// Start the ticker
app.ticker.add();