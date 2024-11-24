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
 * draw ellipse
 */

/**
 * debugging
 */
console.log(ctx);
