
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  let waveHeight = map(vocal, 40, 100, 200, 550, true);
  fill(250, 80, 40); // red
  for(let i = 0; i < width; i += 10) {
    let y = height / 2.5+ sin(i * 1+ millis() * 50) * waveHeight;
    ellipse(i, y, 10, 10);
  }

let ovalPlace = map(other, 20, 100, height-50, 30, true);
let ovalSize = map(other, 10, 20, 60, 250, true);
fill(255, 255, 0); // yellow 
ellipse(width/2.1, ovalPlace, ovalSize);

stroke(400, 50, 0); // orange
line(width/2 - ovalSize, ovalPlace, width/2 - ovalSize - 100, ovalPlace); // left
line(width/2 + ovalSize, ovalPlace, width/2 + ovalSize + 100, ovalPlace); // rioght
line(width/2, ovalPlace - ovalSize, width/2, ovalPlace - ovalSize - 50); // top
line(width/2, ovalPlace + ovalSize, width/2, ovalPlace + ovalSize + 50); // bottom

let stripeWidth = map(vocal, 0, 100, 100, 20, true);

fill(0,0,0); // 

for (let i = 0; i < height; i += stripeWidth * 2) { // multiply by 2 to alternate stripes
  beginShape();
  for (let x = 0; x <= width; x += 20) { // increment x by 20 to make it smooth
    let y = i + sin(x) * 10; //  wave height
    vertex(x, y);
  }
  vertex(width, i + stripeWidth);
  vertex(0, i + stripeWidth);
  endShape(CLOSE);
}
}

