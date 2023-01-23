function preload(){
    moustache = loadImage('https://i.postimg.cc/fR4gJm4Z/moustache-removebg-preview.png');
};

function setup(){
    var canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
};

var nose_x = 0;
var nose_y = 0;

function gotPoses(results){
    if(results.length > 0){
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("Nose X = "+nose_x+", Nose Y = "+nose_y);
    }
};

function draw(){
    image(video, 0, 0, 400, 400);
    image(moustache, nose_x - 20, nose_y, 50, 50);
};

function modelLoaded(){
    console.log("Posenet has been initializedd correctly!");
};

function take_snapshot(){
    save("Image.png");
};