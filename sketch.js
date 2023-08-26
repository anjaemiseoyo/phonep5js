let font;
let points = [];
let slider;
let img;

function preload() {
 img = loadImage('phone1067x800.jpeg');
  font = loadFont("Pretendard-Medium.ttf");
}

function setup() {
  createCanvas(1067, 800);
  textSize(200);
  topLayer = createGraphics(width, height);
  
  
  topLayer.image(img, 0, 0);
  
  //topLayer.strokeWeight(30);
  
        
  topLayer.blendMode(REMOVE);
  
  
}

function createPoints() {
  return font.textToPoints('seehowQ', 20, 650, 400, {
    sampleFactor: 0.5
  });
}

function draw() {
  background(244,233,198);
  points = createPoints();
  drawEllipses();
  
  if(mouseIsPressed){
    //크기조절 관련 코드
    //let sw = sizeSlider.value();
        //strokeWeight(sw);
    
    topLayer.line(pmouseX, pmouseY, mouseX, mouseY);
    
topLayer.noStroke();
  topLayer.rect(mouseX, mouseY, (20));
  topLayer.rectMode(CENTER);
    
  }
  
  image(topLayer, 0, 0);
  
  
}

function drawEllipses() {
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    fill(10);
    ellipse(pt.x + 30 * sin(0.3 * frameCount + pt.y), pt.y, 5);
  }
}