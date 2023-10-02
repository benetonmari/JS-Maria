// let const var 
let xBolinha =300; // Padrão camelCase
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;
let velocidadeXBolionh = 2;
let velocidadeYBolinha = 3; 

// Váriaveis  raquete 
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// Váriaveis da raquete oponente 
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

function setup() {
createCanvas(600, 400);
console.log("iniciou o setup");
}

function draw() {
 background(0);
 mostraBolinha(); // chamado a função mostra bolinha 
 movimentaBolinha() ;
 verificaColisaoBorda() ;
 mostraRaquete();
 movimentaRaquete();
 verificaçaoColisaoRaquete();
 mostraRaqueteOponente();
 movimentaRaqueteOponente();
 verificaColisaoRaqueteOponente(); 
}

// Cria a função motraBolinha
function mostraBolinha (){
  circle (xBolinha, yBolinha, diametro);
 }

function movimentaBolinha(){
 xBolinha += velocidadeXBolinha;
 yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
if (xBolinha > width || xBolinha < 0) {
 velocidaeXBolinha *= -1;
 }     

 if(yBolinha > height || yBolinha < 0) {
   velocieYBolinha *= -1;
 }
} 

function MostraRaquete() {
 rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
} 

function movimentaRaquete () {
 if (KeysIsDown(UP_ARROW)) {

}