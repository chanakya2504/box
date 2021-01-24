var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
var box1 = createSprite(700,550,150,20)
box1.shapeColor = "green"

var box2 = createSprite(500,550,150,20)
box2.shapeColor = "red"

var box3 = createSprite(300,550,150,20)
box3.shapeColor = "orange"

var box4 = createSprite(100,550,150,20)
box4.shapeColor = "blue"




    //create box sprite and give velocity
    var blinker = createSprite(random(200,750),5,5)
    blinker.velocityX = 3
    blinker.velocityY = 5

}

function draw() {
    background(0);
    //create edgeSprite

createEdgeSprites()
drawSprites()
    //add condition to check if box touching surface and make it box
    if(blinker.isTouching(box1) ){
        blinker.shapeColor = "green"
    }

    if(blinker.isTouching(box2) ){
        blinker.shapeColor = "red"
    }

    if(blinker.isTouching(box3) ){
        blinker.shapeColor = "orange"
    }

    if(blinker.isTouching(box4) ){
        blinker.shapeColor = "blue"
    }
}
