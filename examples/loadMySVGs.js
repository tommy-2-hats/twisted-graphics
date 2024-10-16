import * as PIXI from 'pixi.js';
(async () =>
{
    // Create a new application
    const app = new PIXI.Application();

    // Initialize the application
    await app.init({ antialias: true, resizeTo: window });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);
// 
    const theSvg = await PIXI.Assets.load({
        src: '/assets/main-menu/tiger.svg',
        data: {
            parseAsGraphicsContext: true,
        },
    });

    const graphics1 = new PIXI.Graphics(theSvg);
    // line it up as this svg is not centered
    const bounds1 = graphics1.getLocalBounds();
    
    graphics1.pivot.set((bounds1.x + bounds1.width) / 2, (bounds1.y + bounds1.height) / 2);

    graphics1.position.set(app.screen.width / 2, app.screen.height / 2);

    app.stage.addChild(graphics1);

    app.ticker.add((time) =>
    {
        graphics1.rotation += 0.01;
        graphics1.scale.set(0 + Math.sin(graphics1.rotation));
    });
})();