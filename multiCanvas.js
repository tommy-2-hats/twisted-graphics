import * as PIXI from 'pixi.js';
import { Assets } from 'pixi.js';

// Create the outer nav element
const outerNav = document.createElement('nav');
outerNav.id = 'menuNav';

// Create the main-menu div
const mainMenu = document.createElement('div');
mainMenu.id = 'main-menu';

// Create the canvas element
const canvas = document.createElement('canvas');
canvas.id = 'menuCanvas';
mainMenu.appendChild(canvas);

// Append the main-menu div to the outer nav
outerNav.appendChild(mainMenu);

// Append the outer nav to the document body
document.body.appendChild(outerNav);

// Initialize PIXI Application
const app = new PIXI.Application();
app.init({ view: canvas, resizeTo: window });

// Load SVG images
const svgPaths = [
    'assets/main-menu/swirl.svg',
    'assets/main-menu/us.svg',
    'assets/main-menu/tiger.svg',
    'assets/main-menu/logos.svg',
    'assets/main-menu/eyes.svg',
    'assets/main-menu/me.svg'
];

const loadSVGs = async () => {
    try {
        const textures = await Promise.all(svgPaths.map(path => Assets.load(path)));
        const container = new PIXI.Container();
        app.stage.addChild(container);

        textures.forEach((texture, index) => {
            const sprite = new PIXI.Sprite(texture);
            sprite.width = app.screen.width / 6;
            sprite.height = sprite.width * (texture.height / texture.width);
            sprite.x = index * sprite.width;
            sprite.interactive = true;
            sprite.buttonMode = true;

            // Placeholder event listeners
            sprite.on('pointerover', () => {
                console.log(`Mouse entered ${svgPaths[index]}`);
            });
            sprite.on('pointerout', () => {
                console.log(`Mouse left ${svgPaths[index]}`);
            });
            sprite.on('pointerdown', () => {
                console.log(`Mouse clicked ${svgPaths[index]}`);
            });

            container.addChild(sprite);
        });

        // Adjust container height based on the tallest sprite
        const maxHeight = Math.max(...container.children.map(child => child.height));
        app.renderer.resize(app.screen.width, maxHeight);
    } catch (error) {
        console.error('Error loading SVGs:', error);
    }
};

loadSVGs();

// Handle window resize
window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, app.renderer.height);
    app.stage.children[0].children.forEach((sprite, index) => {
        sprite.width = app.screen.width / 6;
        sprite.height = sprite.width * (sprite.texture.height / sprite.texture.width);
        sprite.x = index * sprite.width;
    });
});


