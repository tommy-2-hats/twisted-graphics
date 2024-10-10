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

// Create a Graphics object, draw a rectangle and fill it
let obj = new PIXI.Graphics()
  .rect(10, 10, 200, 100)
  .fill(0xffff00);

// Add it to the stage to render
app.stage.addChild(obj)


//----------------------------------
//-----  Create Annimation  -------- Hell yeah baby!
//----------------------------------

// Add a variable to count up the seconds our demo has been running
// let elapsed = 0.0;
// Tell our application's ticker to run a new callback every frame, passing
// in the amount of time that has passed since the last tick

// // Start the ticker
// app.ticker.add();

// app.ticker.add((ticker) => {
//   // Add the time to our total elapsed time
//   elapsed += ticker.deltaTime;
//   // Update the sprite's X position based on the cosine of our elapsed time.  We divide
//   // by 50 to slow the animation down a bit...
//   sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
// });


