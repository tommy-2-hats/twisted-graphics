import { Application, Assets, Graphics, Container } from 'pixi.js';

(async () => {
  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({ antialias: true, background: '#1099bb', resizeTo: window });

  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);

  const imagePath = '/assets/main-menu/';
  const imageFileType = '.svg';
  const imageNames = ['swirl', 'ux', 'tiger', 'logos', 'eyes', 'me'];

  const imageGroup = [];
  const imageGroupContainer = new Container();

  for (const [index, imageName] of imageNames.entries()) {
    const image = await Assets.load({
      src: imagePath + imageName + imageFileType,
      data: {
        parseAsGraphicsContext: true,
      },
    });

    const anImage = new Graphics(image);

    const imageBounds = anImage.getLocalBounds();
    anImage.pivot.set((imageBounds.x + imageBounds.width) / 2, (imageBounds.y + imageBounds.height) / 2);

    // Calculate position for grid layout
    const column = index % 6;
    const row = Math.floor(index / 6);
    const padding = 20;
    const x = column * (imageBounds.width + padding);
    const y = row * (imageBounds.height + padding);

    anImage.position.set(x, y);

    imageGroupContainer.addChild(anImage);
    imageGroup.push(anImage);
  }

  // Center the imageGroupContainer in the application screen
  imageGroupContainer.position.set((app.screen.width - imageGroupContainer.width) / 2, (app.screen.height - imageGroupContainer.height) / 2);
  app.stage.addChild(imageGroupContainer);

})();