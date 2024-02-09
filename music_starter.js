
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 200);
  background(300); 
  rectMode(CENTER); 
  strokeWeight(9);
  stroke(bass, 80, 80); // Use the 'drum' variable for the hue
  

}
let triangleHeight = map(bass, 40, 100, 200, 550, true);
fill(117,200,174); // teal
for(let i=0; i<3; i++) {
  let cur_x = map(i, 0, 4, 0, width);
  let next_x = map(i+1, 0, 3, 0, width);
  let mid_x = (cur_x + next_x) / 2.0;
  //let cur_y = 4 * height / 5;
  let cur_y = height 
  triangle(cur_x, cur_y, mid_x, cur_y - triangleHeight, next_x, cur_y);
}
