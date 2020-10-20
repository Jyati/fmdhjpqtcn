var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.1

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0.4, isStatic: true });
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);

	box1 = new Box(380, 655, 200, 20);
	box2 = new Box(285, 620, 20, 100);
	box3 = new Box(475, 620, 20, 100);


	//Engine.run(engine);

}


function draw() {
	background(0);
	Engine.update(engine);
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y - 5

	box1.display();
	box2.display();
	box3.display();


	console.log(box1);

	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on
		Matter.Body.setStatic(packageBody, false);
	}

	else if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x = helicopterSprite.x + 20;
		Matter.Body.translate(packageBody, {x:20, y:helicopterSprite.y})
	}

	else if (keyCode === LEFT_ARROW) {
		helicopterSprite.x = helicopterSprite.x - 20;
		Matter.Body.translate(packageBody, {x:-20, y:helicopterSprite.y})

	}
}



