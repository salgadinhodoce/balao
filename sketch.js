var arco , flecha, fundo ;
var arcoImage, flechaImage, balaoverdeImage, balaovermelhoImage, balaorosanImage ,balaoazulImage, fundoImage;

var score=0;

function preload(){
  fundoImage = loadImage("background0.png");
  flechaImage = loadImage("arrow0.png");
  arcoImage = loadImage("bow0.png");
  balaoverdeImage = loadImage("green_balloon0.png");
  balaorosaImage = loadImage("pink_balloon0.png");
  balaoazulImage = loadImage("blue_balloon0.png");
  balaovermelhoImage = loadImage("red_balloon0.png");
  

}



function setup() {
  createCanvas(400, 400);
  
  //criando fundo
  fundo = createSprite(0,0,400,400);
  fundo.addImage(fundoImage);
  fundo.scale = 2.5
  
  // criando arco para atirar flecha
  arco = createSprite(380,220,20,50);
  arco.addImage(arcoImage); 
  arco.scale = 1;
  
   score = 0
}

function draw() {
 background(0);
  // movendo chão
    fundo.velocityX = -3 

    if (fundo.x < 0){
      fundo.x = fundo.width/2;
    }
  
  //movendo flecha
  arco.y = World.mouseY
  
   // soltar flecha quando barra de espaço é pressionada
  if (keyDown("space")) {
    criarflecha();
    
  }

  
  
  //criando inimigos continuamente
 
   var select_balloon = Math.round(random(1,4));
    
   if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      balaovermelho();
    } else if (select_balloon == 2) {
      balaoverde();
    } else if (select_balloon == 3) {
      balaoazul();
    } else if(select_balloon == 4) {
      balaorosa();
    }
  }
  
  drawSprites();
  text("Pontuação: "+ score, 300,50)
}


// Criando flechas para arco
 function criarflecha() {
  var flecha= createSprite(100, 100, 60, 10);
  flecha.addImage(flechaImage);
  flecha.x = 360;
  flecha.y=arco.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
}

 

function balaovermelho() {
   var vermelho = createSprite(Math.round(random(20, 370)),50, 10, 10);
   vermelho.addImage(balaovermelhoImage);
   vermelho.velocityX = 3;
   vermelho.lifetime = 150;
   vermelho.scale = 0.1;
 }


function balaoazul() {
  var azul = createSprite(0,Math.round(random(20, 370)), 10, 10);
  azul.addImage(balaoazulImage);
  azul.velocityX = 3;
  azul.lifetime = 150;
  azul.scale = 0.1;
}

function balaoverde() {
  var verde = createSprite(0,Math.round(random(20, 370)), 10, 10);
  verde.addImage(balaoverdeImage);
  verde.velocityX = 3;
  verde.lifetime = 150;
  verde.scale = 0.1;
}

function balaorosa() {
  var rosa = createSprite(0,Math.round(random(20, 370)), 10, 10);
  rosa.addImage(balaorosaImage);
  rosa.velocityX = 3;
  rosa.lifetime = 150;
  rosa.scale = 1;
}
