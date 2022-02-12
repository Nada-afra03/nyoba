let j;
function setup() {
  // put setup code here
  createCanvas(1400,700);
  y=100;
  j=0;
}

function draw() {
  // put drawing code here
  background(200);
  stroke(0,0,0)
  strokeWeight(3)
  line(700,0,700,700)
  strokeWeight(12)
  stroke(0,0,0)
  
  line(80,690,590,690)
  line(90,580,600,580)
  strokeWeight(8)
  stroke(255,255,255)
  line(90,635,160,635)
  line(190,635,260,635)
  line(290,635,360,635)
  line(390,635,460,635)
  line(490,635,560,635)

  fill(249,249,79)
  strokeWeight(6)
  stroke(252,125,52)
  var y= 350+3*Math.sin(PI/10*j)
  j+=0.5
  ellipse(y,200,70,70)
  line(310,200,270,200)
  line(390,200,430,200)
  line(350,130,350,160)
  line(350,240,350,270)
  line(410,260,380,230)
  line(300,140,320,170)
  line(410,140,380,170)
  line(320,230,290,260)

  stroke(0,0,0)
  strokeWeight(7)
  fill(255,0,0)
  var y= 220+3*Math.sin(PI/10*j)
  j+=0.5
  rect(y,550,340,80)
  fill(255,266,255)
  strokeWeight(15)
  var y= 280+3*Math.sin(PI/10*j)
  j+=0.5
  ellipse(y,630,60,60)
  var y= 500+3*Math.sin(PI/10*j)
  j+=0.5
  ellipse(y,630,60,60)
  strokeWeight(6)
  var y= 500+3*Math.sin(PI/10*j)
  j+=0.5
beginShape()
  fill(255,0,0)
vertex(250,550);
vertex(300,480);
vertex(500,480);
vertex(530,550);
endShape(CLOSE);

beginShape()
fill(255,255,255)
strokeWeight(2)
vertex(295,540);
vertex(330,495);
vertex(380,495);
vertex(380,540);
vertex(295,540);
endShape(CLOSE)

beginShape()
vertex(410,540);
vertex(410,495);
vertex(460,495);
vertex(485,540);
vertex(410,540);
endShape(CLOSE)
}