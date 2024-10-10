import * as PIXI from 'pixi.js';
(async () =>
{
    // Create a new application
    const app = new PIXI.Application();

    // Initialize the application
    await app.init({ antialias: true, resizeTo: window });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);

    const theSvg = await PIXI.Assets.load({
        src: '/assets/main-menu/tiger.svg',
        data: {
            parseAsGraphicsContext: true,
        },
    });

    const graphics = new PIXI.Graphics(theSvg);

    // line it up as this svg is not centered
    const bounds = graphics.getLocalBounds();

    graphics.pivot.set((bounds.x + bounds.width) / 2, (bounds.y + bounds.height) / 2);

    graphics.position.set(app.screen.width / 2, app.screen.height / 2);

    app.stage.addChild(graphics);

    app.ticker.add((time) =>
    {
        graphics.rotation += 0.01;
        graphics.scale.set(2 + Math.sin(graphics.rotation));
    });
})();