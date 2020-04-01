

var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
 
//var boxes = [];
var gSlider;
var engine,world;
var ground;
 
 
function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
   
   ground = new Ground(200,370,500,50);
}

function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
        box = new Box(mouseX,mouseY,50,50);
    }
}
 
function draw() {
    
    Engine.update(engine);
    background(51);
    
    var fVal = gSlider.value();
    //mousePressed();
    box.display();
    ground.display();
    // Use a for loop to show all the boxes

}
 
 


 
 

 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.

//    this.show = function () {
//    }
