import * as BasicCanvas from '../lib/BasicCanvas.js';

import {
  star
} from '../lib/BasicShapes.js';

let sketch, stars;

use(BasicCanvas);

sketch = canvas_id('sketch');

sketch.dimensions(500, 300);

sketch.stroke = TRANSPARENT;

stars = [];

sketch.loop(frame => {
  let alpha, i, len, location, size;
  sketch.background(HEX(0x100044));
  if (frame % 3 === 0) {
    stars.push(Point(Math.random() * sketch.width, Math.random() * sketch.height));
  }
  alpha = 0;
  for (i = 0, len = stars.length; i < len; i++) {
    location = stars[i];
    size = alpha / 40;
    sketch.fill = RGBA(255, 255, 130, alpha);
    sketch.render(star(location, 4, 5 + size, 5));
    alpha += 255 / stars.length;
  }
  if (stars.length > 100) {
    stars.shift();
  }
  sketch.fill = '#fff';
  sketch.font = 'bold 100px Georgia';
  sketch.text('Heilige', P(71, 148));
  return sketch.text('Nacht', P(60, 230));
});
