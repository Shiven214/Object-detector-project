img="";

function preload(){
img= loadImage('index.jpg');
}

function setup(){
 canvas= createCanvas(600, 500);
 canvas.center();

 objectDetector= ml5.objectDetector("cocossd", modelLoaded);
 document.getElementById("status").innerHTML="Status : Detecting objects";
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("red");
    text("bed", 45, 75);
    noFill();
    stroke("red");
    rect(30, 60, 450, 350);
}

function modelLoaded(){
    console.log("model is loaded");
    statusz= true;
    objectDetector= detect(img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.log(error);
    }
    console.log(result);
}