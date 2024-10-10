import './style.css'
import Warp from "warpjs";

const svg = document.getElementById('ux');
const warp = new Warp(svg);
const svgDot = document.getElementById('tigersvg');
const warpDot = new Warp(svgDot);

warp.interpolate(2);
warpDot.interpolate(8);

warp.transform(([x, y]) => [x, y + 4 * Math.sin(x / 16)]);

let offset = 0;
function animate() {
    warp.transform(([x, y]) => [x, y + 4 * Math.sin(x / 16 + offset)]);
    warpDot.transform(([x, y]) => [x, y + 8 * Math.sin(x / 16 + offset)]);
    offset += 0.1;
    requestAnimationFrame(animate);
}

animate();