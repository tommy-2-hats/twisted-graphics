import * as PIXI from 'pixi.js';

(async () =>
{
    // Create a new application
    const app = new PIXI.Application();

    // Initialize the application
    await app.init({ background: '#1099bb', resizeTo: window });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);

    // Create and add a container to the stage
    const container = new PIXI.Container();

    app.stage.addChild(container);

    // Load the myLogo texture
    const texture = await PIXI.Assets.load('/assets/favicon.png');

    // Create a 5x5 grid of bunnies in the container
    for (let i = 0; i < 6; i++)
    {
        const myLogo = new PIXI.Sprite(texture);

        myLogo.x = (i % 6) * 40;
        // myLogo.y = Math.floor(i / 5) * 40;
        container.addChild(myLogo);
    }

    // Move the container to the center
    container.x = app.screen.width / 2;
    container.y = container.height * 3;

    // Center the myLogo sprites in local container coordinates
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

    container.scale.set(5);
    // container.width = parent.width;
    // Listen for animate update
    // app.ticker.add((time) =>
    // {
    //     // Continuously rotate the container!
    //     // * use delta to create frame-independent transform *
    //     container.rotation -= 0.01 * time.deltaTime;
    // });
})();
