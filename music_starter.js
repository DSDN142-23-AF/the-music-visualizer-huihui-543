
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  let stripeWidth = map(other, 0, 90, 0, 10, true);

  fill(30,100,300); // 
  
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
