function preload(){
};

function setup(){
    var canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
};

function take_snapshot(){
    save("Image.png");
};