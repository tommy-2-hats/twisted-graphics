import { Application, Assets, Graphics } from 'pixi.js';

(async () => {
  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({ antialias: true, resizeTo: window });

  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);
  // Load the SVGs
  const svgFilePath = [
    'assets/main-menu/swirl.svg',
    'assets/main-menu/ux.svg',
    'assets/main-menu/tiger.svg',
    'assets/main-menu/logos.svg',
    'assets/main-menu/eyes.svg',
    'assets/main-menu/me.svg'
  ];

  const mySvg = await Assets.load({
    src: svgFilePath[0],
    data: {
      parseAsGraphicsContext: true,
    }
  });

  const svgGraphics = new Graphics(mySvg);

  // line it up as this svg is not centered
  const svgBounds = svgGraphics.getLocalBounds();

  svgGraphics.pivot.set((svgBounds.x + svgBounds.width) / 2, (svgBounds.y + svgBounds.height) / 2);

  svgGraphics.position.set(app.screen.width / 2, app.screen.height / 2);

  app.stage.addChild(svgGraphics);

  app.ticker.add((time) => {
    svgGraphics.rotation += 0.01;
    svgGraphics.scale.set(2 + Math.sin(svgGraphics.rotation));
  });
})();
