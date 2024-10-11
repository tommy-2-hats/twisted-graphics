import * as PIXI from 'pixi.js';
// Create a new PIXI application
const app = new PIXI.Application();
// Initialize the app with a width and height
await app.init({ resizeTo: window, antialias: true });
// Add the canvas to the document body
const mainMenu = document.getElementById('mainMenu');
mainMenu.appendChild(app.view);

const resizeApp = () => {
  const width = mainMenu.clientWidth;
  const height = mainMenu.clientHeight;
  app.renderer.resize(width, height);
};

window.addEventListener('resize', resizeApp);
resizeApp();

//--------------------------------------------------
// Function to load and position an SVG image ------
//--------------------------------------------------
const loadAndPositionSVG = async (path, index) => {
    try {
        const svg = await PIXI.Assets.load({
          src: path,
            data: {
                parseAsGraphicsContext: true,
              },
        });
        const graphics = new PIXI.Graphics(svg);
        const bounds = graphics.getLocalBounds();
        graphics.pivot.set(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
        graphics.position.set(bounds.width / 2, bounds.height / 2);
        graphics.position.x += (graphics.width * index);
        app.stage.addChild(graphics);
        // console.log({
        //   svg,
        //   graphics,
        //   bounds
        // });
      } catch (error) {
        console.error(`Error loading SVG ${path}:`, error);
    }
};


//--------------------------------------------------
// Load and position each SVG image ----------------
//--------------------------------------------------
const imagePaths = [
    'assets/main-menu/swirl.svg',
    'assets/main-menu/ux.svg',
    'assets/main-menu/tiger.svg',
    'assets/main-menu/logos.svg',
    'assets/main-menu/eyes.svg',
    'assets/main-menu/me.svg'
  ];
  imagePaths.forEach((path, index) => {
    loadAndPositionSVG(path, index);
  });
  
  