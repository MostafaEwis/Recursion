var c = 0;
var sx = 5;
var sy = 5;
var cs = 1;
var ex = 1;
var ey = 1;
var r = 0;

function setup() {
  createCanvas(windowWidth, windowHeight - 30);
  sliderX = createSlider(0, 50, 0, 1);
  sliderY = createSlider(0, 50, 0, 1);
}

function draw() {
  createCanvas(windowWidth, windowHeight - 30);
  sx = sliderX.value();
  sy = sliderY.value();
  sx += random(-r, r);
  sy += random(-r, r);

  c += cs;
  if (c > 255 || c < 1) {
    cs *= -1;
  }
  background(255 - c);
  noFill();
  stroke(c);
  rectMode(CENTER);
  strokeWeight(1);
  meh(width / 2, height / 2, 300);
}

function meh(x, y, d) {
  ellipse(x, y, d, d);
  if (d > 1) {
    meh(x - sx, y - sy, d - 50);
    meh(x + sx, y + sy, d - 50);
    meh(x - sx, y + sy, d - 50);
    meh(x + sx, y - sy, d - 50);
  }
}