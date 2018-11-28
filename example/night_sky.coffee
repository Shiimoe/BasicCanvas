import * as BasicCanvas from '../lib/BasicCanvas.js'
import { star } from '../lib/BasicShapes.js'

use BasicCanvas

sketch = canvas_id 'sketch'

sketch.dimensions 500, 300
sketch.stroke_weight = 0

stars = []
sketch.loop (frame) ->
  sketch.background HEX 0x100044

  if frame % 3 is 0
    stars.push Point Math.random() * sketch.width, Math.random() * sketch.height

  alpha = 0
  for location in stars
    size = alpha / 40
    shape = sketch.render star location, 4, 5 + size, 5
    shape.fill RGBA 255, 255, 130, alpha

    alpha += 255 / stars.length

  if stars.length > 100
    stars.shift()

  sketch.font = 'bold 100px Georgia'
  sketch.text 'Heilige', P 71, 148
  sketch.text 'Nacht', P 60, 230