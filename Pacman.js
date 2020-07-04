var pacman;
var angulo;
var x = 200;
var y = 200;
var velboca = 0.01;

function setup() {
  createCanvas(400, 400);
  angulo= PI/4
           
}

function draw() {
  background(0);
  pacman();
    

  if(keyCode == 39){
  x = x + 1
  } 
  if (keyCode == 37){
  x = x - 1
  } 
  if (keyCode == 40){
  y = y + 1
  } 
  if (keyCode == 38){
  y = y - 1
  }
  if (x > 400){
  x = 0;
  }
  if (x < 0){
  x = 400
  }
  if (y > 400){
  y = 0;
  }
  if (y < 0){
  y = 400
  }
}
 
  function pacman(){
  translate(x, y);    
  if (keyCode == 37){
  rotate(PI)  
  } else if (keyCode == 38){
  rotate(PI*2-(PI/2)) 
  } else if (keyCode == 40){
  rotate(PI/2)  
  } 
  fill('#FFFF00');
  arc(0, 0, 40, 40, angulo,-angulo);
  angulo = angulo - velboca;
  if (angulo <= 0){
  velboca = velboca* -1;
  }
    if (angulo >= PI/4){
  velboca = velboca* -1;
  }
  //console.log(angulo);  
  fill(0);
  if (keyCode == 37){
  circle(0,10,5,5);
  } 
  else {
  circle(0,-10,5,5);
  } 
  
    
}
