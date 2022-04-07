nosex=0;
nosey=0;
function preload(){
    lipstick= loadImage('https://i.postimg.cc/pWPQbvGC/l1.png')
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    webcam= createCapture(VIDEO);
    webcam.size(300,300);
    webcam.hide();
}
function draw(){
    image(webcam,0,0,300,300);
    posenet= ml5.poseNet(webcam,modelLoaded);
    posenet.on('pose', gotpose);
    image(lipstick,(nosex-15),nosey,25,25)
}
function modelLoaded(){
    console.log("Model Loaded :)");
}
function gotpose(result){
    if (result.length>0){
    console.log(result);
    console.log(result[0].pose.nose.x);
    console.log(result[0].pose.nose.y);
    nosex=result[0].pose.nose.x;
    nosey=result[0].pose.nose.y+18;
    }
}
function takesnapshot(){
    save('lipstickfilter.png');
}