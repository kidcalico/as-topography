let start = 0;
let inc = 0.01;
let z_offset = 0;
// let stroke_color = 255;

function setup() {
  var canvas = createCanvas(800, 800);
  angleMode(DEGREES);
  var p5sketch = select('.p5sketch');
  canvas.parent(p5sketch);
} 

function draw() {
  background(color('#111'));
  translate(0, 800);
  rotate(-25);
  for (let offset = 0; offset >= -300; offset -= 20) {
    beginShape();
    stroke(color('#ffd67e'));
    strokeWeight(2);
    noFill();
    let xoff = start
    for (let x = 0; x <= 1000; x++) {
      let y = map(noise(xoff, z_offset), 0, 1, 0, 100) - offset;
      vertex(x,y);
      xoff += inc;
    }
    endShape();
    z_offset += 0.00003;
  }
}