/**
 * @name index.js
 * @file src/index.html
 */

/**
 * @name viewport
 */
const viewport      = document.getElementById('viewport');
viewport.position   = viewport.getBoundingClientRect();
/**
 * @name canvas
 */
const canvas    = viewport.querySelector('canvas');
canvas.width    = viewport.position.width - 24;
canvas.height   = viewport.position.height - 24;
console.log(canvas);
/**
 * @ctx
 */
const ctx = canvas.getContext('2d');
/**
 * @name ellipse
 */
const ellipse = {
    cx: null,
    cy: null,
    a: 100,
    b: 50
};
ellipse.cx = canvas.width / 2;
ellipse.cy = canvas.height / 2;
/**
 * draw ellipse
 */
ctx.beginPath();
ctx.ellipse(ellipse.cx, ellipse.cy, ellipse.a, ellipse.b, 0, 0, 2 * Math.PI);
ctx.stroke();
/**
 * draw rect
 */
ctx.save();
ctx.fillStyle = 'red';
ctx.fillRect(ellipse.cx, ellipse.cy, 5, 5);
ctx.restore();
/**
 * debugging
 */
console.log(ctx);
