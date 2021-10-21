azkaban = 0;
fortress = 0;

function preload(){
    g0blet0fFIRE = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    pumpkin = ml5.poseNet(video, modelloaded);
    pumpkin.on('pose', pumpkinjuice);
}

function pumpkinjuice(results){
    console.log(results);
    azkaban = results[0].pose.nose.x;
    fortress = results[0].pose.nose.y;
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(g0blet0fFIRE, azkaban - 215, fortress - 57, 100, 100);
}

function FloreanFortescue(){
    save("cauldronCakes.jpg");
}

function modelloaded(){
    console.log("chamber0fsecrets");
}