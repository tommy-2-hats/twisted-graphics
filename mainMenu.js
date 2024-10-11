import { Application, Assets, Graphics } from 'pixi.js';

(async () =>
{
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

    for (const url of svgUrls) {
        const svg = await Assets.load({
            src: url,
            data: {
                parseAsGraphicsContext: true,
            },
        });

        const graphic = new Graphics(svg);

        // Generate a random color
        const randomColor = Math.floor(Math.random() * 0xFFFFFF);

        // Apply the color to the graphic
        graphic.fill(randomColor);
        graphic.rect(0, 0, graphic.width, graphic.height);
        graphic.fill();

        const bounds = graphic.getLocalBounds();
        graphic.pivot.set((bounds.x + bounds.width) / 2, (bounds.y + bounds.height) / 2);
        graphic.position.set(app.screen.width / 2, app.screen.height / 2);

        app.stage.addChild(graphic);

        app.ticker.add((time) => {
            graphic.rotation += .01;
            graphic.scale.set(2 + Math.sin(graphic.rotation));
        });
    }
})();