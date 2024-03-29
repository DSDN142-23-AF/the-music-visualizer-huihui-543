// vocal, drum, bass, and other are volumes ranging from 0 to 100

let firstRun = true

  let pic = [] // 
function draw_one_frame(words, vocal, drum, bass, other) { // words was missing here
if (firstRun) {
rectMode (CENTER);
pic.push(loadImage('lib/pic1.png')); // the images are in a folder, so I updated their location 
pic.push(loadImage('lib/pic2.png'));
pic.push(loadImage('lib/pic3.png'));
pic.push(loadImage('lib/pic4.png'));
firstRun = false

}

var VocalFrame =int(map(bass, 0,200, 0, 5));
console. log (VocalFrame);
push ();
scale (0.2); 
image(pic[VocalFrame], width/8, height/1) // this was image(pic|VocalFramel, width/2, height/2) updated the variable name and used square brakets
pop ();

 

  let dotHeight = map(vocal, 40, 100, 200, 550, true);
  fill(250, 55, 40); // red orange

  for(let i = 0; i < width; i += 10) {    
    let y = height / 2.5+ sin(i * 1+ millis() * 50) * dotHeight; // learnt from a tuakana
    ellipse(i, y, 10, 15);

}


let ovalPlace = map(other, 10, 100, height-50, 30, true);
let ovalSize = map(other, 10, 20, 60, 250, true);
fill(255, 255, 0); // yellow 
ellipse(width/2.05, ovalPlace, ovalSize);

stroke(400, 15, 0); // red


let stripeWidth = map(vocal, 0, 100, 100, 20, true);
fill(0,0,0); // 

for (let i = 0; i < height; i += stripeWidth * 2) { // multiply by 2 to alternate stripes, learnt from a tuakana
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

