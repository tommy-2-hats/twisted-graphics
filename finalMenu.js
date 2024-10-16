import { Application, Assets, Graphics, Container } from 'pixi.js';

(async () => {
  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({ antialias: true, background: '#1099bb', resizeTo: window });

  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);

  const initialPath = '/assets/main-menu/';
  const fileType = '.svg';
  const svgUrls = [
    `${initialPath}swirl${fileType}`,
    `${initialPath}ux${fileType}`,
    `${initialPath}tiger${fileType}`,
    `${initialPath}logos${fileType}`,
    `${initialPath}eyes${fileType}`,
    `${initialPath}me${fileType}`
  ];

  const svgGraphicGroup = [];
  const container = new Container();

  for (const [index, url] of svgUrls.entries()) {
    const svg = await Assets.load({
      src: url,
      data: {
        parseAsGraphicsContext: true,
      },
    });

    const svgGraphic = new Graphics(svg);

    const svgBounds = svgGraphic.getLocalBounds();
    svgGraphic.pivot.set((svgBounds.x + svgBounds.width) / 2, (svgBounds.y + svgBounds.height) / 2);

    // Calculate position for grid layout
    const column = index % 6;
    const row = Math.floor(index / 6);
    const padding = 20;
    const x = column * (svgBounds.width + padding);
    const y = row * (svgBounds.height + padding);

    svgGraphic.position.set(x, y);

    container.addChild(svgGraphic);
    svgGraphicGroup.push(svgGraphic);
  }

  // Center the container in the application screen
  container.position.set((app.screen.width - container.width) / 2, (app.screen.height - container.height) / 2);
  app.stage.addChild(container);

})();