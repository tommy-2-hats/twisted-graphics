import { Application, Assets, Graphics } from 'pixi.js';

(async () => {
  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({ antialias: true, resizeTo: window });

  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);

  const svgUrls = [
    '/assets/main-menu/swirl.svg',
    '/assets/main-menu/ux.svg',
    '/assets/main-menu/tiger.svg',
    '/assets/main-menu/logos.svg',
    '/assets/main-menu/eyes.svg',
    '/assets/main-menu/me.svg'
  ];

  const graphics = [];

  for (const url of svgUrls) {
    const svg = await Assets.load({
      src: url,
      data: {
        parseAsGraphicsContext: true,
      },
    });

    const graphic = new Graphics(svg);

    const bounds = graphic.getLocalBounds();
    graphic.pivot.set((bounds.x + bounds.width) / 2, (bounds.y + bounds.height) / 2);
    graphic.position.set(app.screen.width / 2, app.screen.height / 2);


    app.stage.addChild(graphic);
    graphics.push(graphic);

  }


})();