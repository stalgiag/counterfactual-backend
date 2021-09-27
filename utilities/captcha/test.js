let sampleRate = 6;

let output = [];
let b;

function setup() {
    createCanvas(500, 500);
    background(100, 0, 0);
    fill(255);
    noStroke();
    b = createButton('SUBMIT');
    b.position(430, 480);
    b.mousePressed(postOutput);
}

function draw() {
    if (frameCount % sampleRate === 0) {
        addOutput();
    }
    
    if (mouseIsPressed) {
        circle(mouseX, mouseY, 20);
    }
}



function addOutput() {
    let cur = {
        x: mouseX,
        y: mouseY,
        clicked: mouseIsPressed
    };
    output.push(cur);
}

function postOutput() {
    let objOutput = { ...output };
    fetch(`http://localhost:3000/submit?array=${JSON.stringify(objOutput)}`)
}