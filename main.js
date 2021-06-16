noseX=0;
noseY=0;

function preload(){
     mustache = loadImage("https://i.postimg.cc/sXGqFWM8/m.png");
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640,500)
     video.hide()
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('poseNet is initialized')
}

function gotPoses(results)
{
    console.log("inside gotposes");
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x ="+ results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    
    }
}
function draw(){
    image(video, 0, 0, 640,500);
    fill(255,0,0);
    stroke(255,0,0);
    image(mustache, noseX, noseY, 30, 30)
}

function take_snapshot (){
    save('myFilterImage.png')
    }