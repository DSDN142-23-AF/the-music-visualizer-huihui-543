
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(255); 
  rectMode(CENTER); 
  strokeWeight(9);
  stroke(drum, 80, 80); // Use the 'drum' variable for the hue
  
  var drumMap = map(drum, 0, 100, 30, 90); // Map 'drum' to a new range
  var LengthOfLine = 300;
  var LineStart = 100;
  var lineEnd = LineStart + LengthOfLine; // Fixed variable name
  
  for (var i = 1; i < 5; i++) {
    var LineStep = i * 10; // Corrected to 'i * 10'
    line(LineStart, LineStep, lineEnd, LineStep); // Fixed 'lineStep' to 'LineStep'
  }
}