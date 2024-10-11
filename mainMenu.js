import * as PIXI from 'pixi.js';
import { Texture, Sprite } from 'pixi.js';

// Create a new PIXI application
const app = new PIXI.Application({ antialias: true });

// Initialize the app with a width and height
await app.init({ background: '#3300FF', resizeTo: window });

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


const images = [];
const canvasWidth = app.renderer.width;
const imageWidth = canvasWidth / 6;

for (let i = 0; i < imagePaths.length; i++) {
    const SVG = await PIXI.Assets.load({
        src: imagePaths[i],
        data: {
            parseAsGraphicsContext: true,
        },
    });

  
}