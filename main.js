var video= "";
var Status= "";





function setup() {
   canvas= createCanvas(600,400);
   canvas.center(); 
   video= createCapture(VIDEO);
   video.hide();   
   
}

function Start() {
 classifier= ml5.objectDetector('cocossd',modelLoaded);
 document.getElementById("status_h3").innerHTML= "Status: Model initialized and trying to detect objects";
}

function modelLoaded() {
   console.log("Model is loaded and working!");
   Status= true;
   video.loop();
   video.volume(0);
   video.speed(1);
} 


function draw() {
   image(video,0,0,600,400);

}