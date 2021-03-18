var hr, mn, sc;

function setup() {
  createCanvas(350,350);

  hr = hour();
  mn = minute();
  sc = second();    
}

function draw() {
  background(0);
  angleMode(DEGREES);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  strokeWeight(4);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));

  noFill();
  stroke(255, 0, 0);
  arc(0,0,260,250,0,360);
  
  stroke(0, 255, 0);
  arc(0,0,240,240,0,360);

  stroke(0, 0, 255);
  arc(0,0,220,230,0,360);
  
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  line(0, 0, 90, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  line(0, 0, 70, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  line(0, 0, 50, 0);
  pop();

  //stroke(109,185,123)
  //arc(130,150,150,150,0,360);

  drawSprites();
}