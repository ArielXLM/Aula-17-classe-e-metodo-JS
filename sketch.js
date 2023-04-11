var box1, box2;




function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(100,200,20,20,2,1);
  box2 = new Box(300,70,30,25,4,6);
}

function draw() 
{
  background(220);
  box1.show();
  box1.moveR();
  box1.moveUp();

  box2.show();
  box2.moveL();
  box2.moveDown();
}

