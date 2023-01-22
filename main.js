nose_x = 0;
nose_y = 0;
left_wrist = 0;
right_wrist = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 400);
    canvas.position(600, 150);

    posenet = ml5.poseNet(video, modelloaded);

    posenet.on('pose', gotposes);
}

function draw(){
    background("#808080");

    document.getElementById("square").innerHTML = "Size of the square is" + difference + "px";
    fill("aqua");
    stroke("blue");
    square(nose_x, nose_y, difference);
}

function modelloaded(){
    console.log("PoseNet is initialized");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        left_wrist = results[0].pose.leftWrist.x;
        right_wrist = results[0].pose.rightWrist.x;
        difference = floor(left_wrist - right_wrist);
    }
}