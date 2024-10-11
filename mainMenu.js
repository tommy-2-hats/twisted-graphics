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

    const graphics = [];

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

        // Generate a random z-index
        graphic.zIndex = Math.floor(Math.random() * 10);

        app.stage.addChild(graphic);
        graphics.push(graphic);

        // Generate a random rotation speed
        const rotationSpeed = 0.01 + Math.random() * 0.005;

        app.ticker.add((time) => {
            graphic.rotation += rotationSpeed;
            graphic.scale.set(2 + Math.sin(graphic.rotation));
        });
    }

    // Ensure the stage sorts children by zIndex
    app.stage.sortableChildren = true;

    // Function to randomly change z-index of graphics
    function randomizeZIndex() {
        for (const graphic of graphics) {
            graphic.zIndex = Math.floor(Math.random() * 100);
        }
        // Sort children by zIndex
        app.stage.children.sort((a, b) => a.zIndex - b.zIndex);
    }

    // Change z-index every 2 seconds
    setInterval(randomizeZIndex, 2000);
})();