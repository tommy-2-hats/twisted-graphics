import * as PIXI from 'pixi.js';
import { Assets } from 'pixi.js';
// Set the style varibles we will use later to animate the varibale font
let vFontFamily = 'DMSans-VariableFont_opsz,wght.ttf';
let vFontWeight = 250;
let vFontStyle = 'normal';
let vFontColor = '#ffffff';

// Create a Text object with the styled text
const style = new PIXI.TextStyle({
    fontFamily: vFontFamily,
    fontSize: 36,
    fontWeight: vFontWeight,
    fill: vFontColor,
    fontStyle: vFontStyle,

});

const textBlock = 'lasdk jfalsdihfoisd faoi sdjfoia dsjfoa sdfoidsj foiasd foiasdhj foihasd foiha sdoifh aosid foiasdh foi asdoihf asoidf oadsih foaisd foihasd hfodsaih fdaosi hfadsoih';

// Create a new PIXI application
const app = new PIXI.Application();

// Initialize the app
app.init({ width: 640, height: 360 }).then(() => {
    document.body.appendChild(app.canvas);

    // Load the variable font
    Assets.load('assets/fonts/DMSans-VariableFont_opsz,wght.ttf').then(() => {
        // Create a new text object
        const text = new PIXI.Text(textBlock, style);

        // Set the position of the text
        text.x = 29;
        text.y = 56;

        // Add the text to the stage
        app.stage.addChild(text);
    });
});