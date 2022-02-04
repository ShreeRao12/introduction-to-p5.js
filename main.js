function preload() {

}

function setup() {
canvas=createCanvas(540, 380);
canvas.position(100, 250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}

function draw() {
image(video, 0, 0, 540, 380);
tint(tint_color);
}

function apply_filter() {
    tint_color= document.getElementById("filter_name").value;
}

function take_snapshot() {
    save("My_photo.png");
} 
