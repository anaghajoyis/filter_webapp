function preload(){

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    ebcam= createCapture(VIDEO);
    webcam.size(300,300);
    webcam.hide();
}
function draw(){
    image(webcam,0,0,300,300);
    posenet= ml5.poseNet(webcam,modelLoaded);
    posenet.on('pose', gotpose);
}
function modelLoaded(){
    console.log("Model Loaded :)");
}
function gotpose(result){
    if (result.length>0){
    console.log(result);
    console.log(result[0].pose.nose.x);
    console.log(result[0].pose.nose.y);
    }
}
function take_snapshot(){
    save('filterlipstick.png')
}