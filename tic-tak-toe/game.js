// Creating variables
var x=[new Image(), new Image(), new Image(), new Image(), new Image()];
x[0].src="x.png";
x[1].src="x.png";
x[2].src="x.png";
x[3].src="x.png";
x[4].src="x.png";
var o=[new Image(), new Image(), new Image(), new Image(), new Image()];
o[0].src="o.png";
o[1].src="o.png";
o[2].src="o.png";
o[3].src="o.png";
var razmerPole=105;
var red=0;
var klik=false;
var klikX;
var klikY;
var pole=[];
for(var i=0; i<3; i++){
    pole[i]=[];
    for(var j=0; j<3; j++){
        pole[i][j]=0;
    }
}


function update() {
   
}

function draw() {
    // This is how you draw a rectangle
    //pole
    context.fillStyle="black";
    context.fillRect(1, 105, 321, 5);
    context.fillRect(1, 215, 321, 5);
    context.fillRect(105, 1, 5, 321);
    context.fillRect(215, 1, 5, 321);
    
    context.fillStyle="white";
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            context.fillRect((razmerPole+5)*i+1, (razmerPole+5)*j+1, razmerPole, razmerPole);
        }
    }
    
    if(red==0 && klik==true){    
        context.drawImage(x[, klikX*razmerPole+7, klikY*razmerPole+7, 100, 100);
    }
    
    if(red==1 && klik==true){
        context.drawImage(o, klikX*razmerPole+7, klikY*razmerPole+7, 100, 100);
    }
    
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key)
}

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
    if(mouseX<300 && mouseY<300){
        klik=true;
        klikX=Math.floor(mouseX/100);
        klikY=Math.floor(mouseY/100);

        if(red==0 && klik==true && pole[klikX][klikY]==0){    
            pole[klikX][klikY]=1;
            red=1;
        }

        if(red==1 && klik==true && pole[klikX][klikY]==0){
            pole[klikX][klikY]=1;
            red=0;
        }
    }
    
};
